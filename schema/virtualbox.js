const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const si = require("systeminformation");

// VirtualBox Info Type
const VirtualBoxInfoType = new GraphQLObjectType({
  name: "VirtualBoxInfo",
  description: "information about virtual box VMs",
  fields: () => ({
    id: { type: GraphQLString, description: "" },
    name: { type: GraphQLString, description: "" },
    running: { type: GraphQLString, description: "" },
    started: { type: GraphQLString, description: "" },
    runningSince: { type: GraphQLString, description: "" },
    stopped: { type: GraphQLString, description: "" },
    stoppedSince: { type: GraphQLString, description: "" },
    guestOS: { type: GraphQLString, description: "" },
    hardwareUUID: { type: GraphQLString, description: "" },
    memory: { type: GraphQLString, description: "" },
    vram: { type: GraphQLString, description: "" },
    cpus: { type: GraphQLString, description: "" },
    cpuExepCap: { type: GraphQLString, description: "" },
    cpuProfile: { type: GraphQLString, description: "" },
    chipset: { type: GraphQLString, description: "" },
    firmware: { type: GraphQLString, description: "" },
    pageFusion: { type: GraphQLString, description: "" },
    configFile: { type: GraphQLString, description: "" },
    snapshotFolder: { type: GraphQLString, description: "" },
    logFolder: { type: GraphQLString, description: "" },
    HPET: { type: GraphQLString, description: "" },
    PAE: { type: GraphQLString, description: "" },
    longMode: { type: GraphQLString, description: "" },
    tripleFaultReset: { type: GraphQLString, description: "" },
    APIC: { type: GraphQLString, description: "" },
    X2APIC: { type: GraphQLString, description: "" },
    ACPI: { type: GraphQLString, description: "" },
    IOAPIC: { type: GraphQLString, description: "" },
    biosAPICmode: { type: GraphQLString, description: "" },
    bootMenuMode: { type: GraphQLString, description: "" },
    bootDevice1: { type: GraphQLString, description: "" },
    bootDevice2: { type: GraphQLString, description: "" },
    bootDevice3: { type: GraphQLString, description: "" },
    bootDevice4: { type: GraphQLString, description: "" },
    timeOffset: { type: GraphQLString, description: "" },
    RTC: { type: GraphQLString, description: "" },
    id: { type: GraphQLString, description: "" },
  }),
});

// Docket Root Query
const VirtualBoxRootQueryType = new GraphQLObjectType({
  name: "VirtualBoxQuery",
  fields: {
    info: {
      type: VirtualBoxInfoType,
      resolve(parent, args) {
        return si.vboxInfo().then((data) => data);
      },
    },
  },
});

module.exports = VirtualBoxRootQueryType;
