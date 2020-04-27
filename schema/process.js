const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const si = require("systeminformation");

//TODO -
// - Add detailed information about given process
// - Add pass comma separated string of services pass "*" for ALL services (linux/win onl

const CurrentLoadType = new GraphQLObjectType({
  name: "Current",
  fields: () => ({
    avgload: { type: GraphQLString, description: "Average load" },
    currentload: { type: GraphQLString, description: "CPU load in %" },
    currentload_user: {
      type: GraphQLString,
      description: "CPU load user in %",
    },
    currentload_system: {
      type: GraphQLString,
      description: "CPU load system in %",
    },
    currentload_nice: {
      type: GraphQLString,
      description: "CPU load nice in %",
    },
    currentload_idle: {
      type: GraphQLString,
      description: "CPU load idle in %",
    },
    currentload_irq: {
      type: GraphQLString,
      description: "CPU load system in %",
    },
    raw_currentload: {
      type: GraphQLString,
      description: "CPU load raw values (ticks)",
    },
    cpus: {
      type: CpusType,
      args: { load: { type: GraphQLString } },
      description: `single current loads per CPU in % + raw ticks`,
      async resolve(parent, args) {
        const data = await si.currentLoad().then((data) => data.cpus);
        return data.find((item) => item.load == args.load);
      },
    },
    allCpus: {
      type: new GraphQLList(CpusType),
      description: "List of current loads per CPU in % + raw ticks",
      async resolve() {
        const data = await si.currentLoad().then((data) => data.cpus);
        return data;
      },
    },
  }),
});
const CpusType = new GraphQLObjectType({
  name: "cpus",
  fields: () => ({
    load: { type: GraphQLString, description: "" },
    load_user: { type: GraphQLString, description: "" },
    load_system: { type: GraphQLString, description: "" },
    load_nice: { type: GraphQLString, description: "" },
    load_idle: { type: GraphQLString, description: "" },
    load_irq: { type: GraphQLString, description: "" },
    raw_load: { type: GraphQLString, description: "" },
    raw_load_user: { type: GraphQLString, description: "" },
    raw_load_system: { type: GraphQLString, description: "" },
    raw_load_nice: { type: GraphQLString, description: "" },
    raw_load_idle: { type: GraphQLString, description: "" },
    raw_load_irq: { type: GraphQLString, description: "" },
  }),
});

const ProcessType = new GraphQLObjectType({
  name: "process",
  fields: () => ({
    all: { type: GraphQLString, description: "# of all processes" },
    running: { type: GraphQLString, description: "# of all processes running" },
    blocked: { type: GraphQLString, description: "# of all processes blocked" },
    sleeping: {
      type: GraphQLString,
      description: "# of all processes sleeping",
    },
    unknown: {
      type: GraphQLString,
      description: "# of all processes unknown status",
    },
    list: {
      type: ListType,
      args: { name: { type: GraphQLString } },
      description: `single  processes incl. details`,
      async resolve(parent, args) {
        const data = await si.processes().then((data) => data.list);
        return data.find((item) => item.name === args.name);
      },
    },
    allList: {
      type: new GraphQLList(ListType),
      description: "list of all processes incl. details",
      async resolve() {
        const data = await si.processes().then((data) => data);
        return data.list;
      },
    },
  }),
});
const ListType = new GraphQLObjectType({
  name: "list",
  fields: () => ({
    pid: { type: GraphQLString, description: "process PID" },
    parentPid: { type: GraphQLString, description: "parent process PID" },
    name: { type: GraphQLString, description: "process name" },
    pcpu: { type: GraphQLString, description: "process % CPU usage" },
    pcpuu: { type: GraphQLString, description: "process % CPU usage (user)" },
    pcpus: { type: GraphQLString, description: "process % CPU usage (system)" },
    pmem: { type: GraphQLString, description: "process memory %" },
    priority: { type: GraphQLString, description: "process priotity" },
    mem_vsz: {
      type: GraphQLString,
      description: "process virtual memory size",
    },
    mem_rss: {
      type: GraphQLString,
      description: "process mem resident set size",
    },
    nice: { type: GraphQLString, description: "process nice value" },
    started: { type: GraphQLString, description: "process start time" },
    state: {
      type: GraphQLString,
      description: "process state (e.g. sleeping)",
    },
    tty: {
      type: GraphQLString,
      description: "tty from which process was started",
    },
    user: { type: GraphQLString, description: "user who started process" },
    command: { type: GraphQLString, description: "process starting command" },
    params: { type: GraphQLString, description: "process params" },
    path: { type: GraphQLString, description: "process path" },
  }),
});

const FullLoadType = new GraphQLObjectType({
  name: "FullLoad",
  fields: () => ({
    number: {
      type: GraphQLString,
      description: "CPU full load since bootup in %",
    },
  }),
});

// Processes Root Query
const ProcessRootQueryType = new GraphQLObjectType({
  name: "ProcessQuery",
  description: "Processes information object ",
  fields: {
    currentLoad: {
      type: CurrentLoadType,
      description: "CPU-Load",
      resolve(parent, args) {
        return si.currentLoad().then((data) => data);
      },
    },
    fullLoad: {
      type: FullLoadType,
      description: "CPU full load since bootup in %",
      resolve() {
        return si.fullLoad().then((data) => {
          return { number: data };
        });
      },
    },
    process: {
      type: ProcessType,
      description: "Running processes",
      resolve(parent, args) {
        return si.processes().then((data) => data);
      },
    },
  },
});

module.exports = ProcessRootQueryType;
