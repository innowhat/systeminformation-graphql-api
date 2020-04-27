const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const si = require("systeminformation");

// Docker Info Type
const DockerInfoType = new GraphQLObjectType({
  name: "DockerInfo",
  description:
    "get information about docker containers, stats and processes inside a docker container",
  fields: () => ({
    id: { type: GraphQLString, description: "" },
    containers: { type: GraphQLString, description: "" },
    containersRunning: { type: GraphQLString, description: "" },
    containersPaused: { type: GraphQLString, description: "" },
    containersStopped: { type: GraphQLString, description: "" },
    images: { type: GraphQLString, description: "" },
    memoryLimit: { type: GraphQLString, description: "" },
    SwapLimit: { type: GraphQLString, description: "" },
    kernelMemory: { type: GraphQLString, description: "" },
    cpuCfsPeriod: { type: GraphQLString, description: "" },
    cpuCfsQuota: { type: GraphQLString, description: "" },
    cpuShares: { type: GraphQLString, description: "" },
    cpuSet: { type: GraphQLString, description: "" },
    ipv4Forwarding: { type: GraphQLString, description: "" },
    bridgeNfIptables: { type: GraphQLString, description: "" },
    bridgeNfIp6tables: { type: GraphQLString, description: "" },
    debug: { type: GraphQLString, description: "" },
    nfd: { type: GraphQLString, description: "" },
    oomKillDisable: { type: GraphQLString, description: "" },
    ngoroutines: { type: GraphQLString, description: "" },
    systemTime: { type: GraphQLString, description: "" },
    loggingDriver: { type: GraphQLString, description: "" },
    cgroupDriver: { type: GraphQLString, description: "" },
    nEventsListener: { type: GraphQLString, description: "" },
    kernelVersion: { type: GraphQLString, description: "" },
    operatingSystem: { type: GraphQLString, description: "" },
    osType: { type: GraphQLString, description: "" },
    architecture: { type: GraphQLString, description: "" },
    ncpu: { type: GraphQLString, description: "" },
    memTotal: { type: GraphQLString, description: "" },
    dockerRootDir: { type: GraphQLString, description: "" },
    httpProxy: { type: GraphQLString, description: "" },
    httpsProxy: { type: GraphQLString, description: "" },
    noProxy: { type: GraphQLString, description: "" },
    name: { type: GraphQLString, description: "" },
    labels: { type: GraphQLString, description: "" },
    experimentalBuild: { type: GraphQLString, description: "" },
    serverVersion: { type: GraphQLString, description: "" },
    clusterStore: { type: GraphQLString, description: "" },
    clusterAdvertise: { type: GraphQLString, description: "" },
    defaultRuntime: { type: GraphQLString, description: "" },
    liveRestoreEnabled: { type: GraphQLString, description: "" },
    isolation: { type: GraphQLString, description: "" },
    initBinary: { type: GraphQLString, description: "" },
    productLicense: { type: GraphQLString, description: "" },
  }),
});

// Docket Root Query
const DockerRootQueryType = new GraphQLObjectType({
  name: "DockerQuery",
  description: "Docker information",
  fields: {
    info: {
      type: DockerInfoType,
      resolve(parent, args) {
        return si.dockerInfo().then((data) => data);
      },
    },
  },
});

module.exports = DockerRootQueryType;
