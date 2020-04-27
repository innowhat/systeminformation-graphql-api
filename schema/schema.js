const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const HardwareRootQueryType = require("./hardware");
const BatteryRootQueryType = require("./battery");
const CpuRootQueryType = require("./cpu");
const MemoryRootQueryType = require("./memory");
const GraphicsRootQueryType = require("./graphics");
const OsRootQueryType = require("./os");
const ProcessRootQueryType = require("./process");
const DiskRootQueryType = require("./disk");
const NetworkRootQueryType = require("./network");
const WifiNetworksRootQueryType = require("./wifi");
const DockerRootQueryType = require("./docker");
const VirtualBoxRootQueryType = require("./virtualbox");
// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Select object query as needed",
  fields: {
    //Hardware data query
    Hardware: {
      type: HardwareRootQueryType,
      resolve(parent, args) {
        return HardwareRootQueryType;
      },
    },
    //OS data query
    OS: {
      type: OsRootQueryType,
      resolve() {
        return OsRootQueryType;
      },
    },
    //Cpu data query
    Cpu: {
      type: CpuRootQueryType,
      resolve() {
        return CpuRootQueryType;
      },
    },
    // Memory data query
    Memory: {
      type: MemoryRootQueryType,
      resolve() {
        return MemoryRootQueryType;
      },
    },
    // Graphics data query
    Graphics: {
      type: GraphicsRootQueryType,
      resolve() {
        return GraphicsRootQueryType;
      },
    },
    //Battery data query
    Battery: {
      type: BatteryRootQueryType,
      resolve() {
        return BatteryRootQueryType;
      },
    },
    //Process and services data query
    Processes: {
      type: ProcessRootQueryType,
      resolve() {
        return ProcessRootQueryType;
      },
    },
    //Disks and File System data query
    DiskFileSystem: {
      type: DiskRootQueryType,
      resolve() {
        return DiskRootQueryType;
      },
    },
    //Network data query
    Network: {
      type: NetworkRootQueryType,
      resolve() {
        return NetworkRootQueryType;
      },
    },
    Wifi: {
      type: WifiNetworksRootQueryType,
      resolve() {
        return WifiNetworksRootQueryType;
      },
    },
    Docker: {
      type: DockerRootQueryType,
      resolve() {
        return DockerRootQueryType;
      },
    },
    VirtualBox: {
      type: VirtualBoxRootQueryType,
      resolve() {
        return VirtualBoxRootQueryType;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
