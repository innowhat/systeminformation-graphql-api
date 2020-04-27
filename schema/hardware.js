const { GraphQLObjectType, GraphQLString } = require("graphql");
const si = require("systeminformation");

// System Type
const SystemType = new GraphQLObjectType({
  name: "system",
  fields: () => ({
    manufacturer: { type: GraphQLString },
    brand: { type: GraphQLString },
    version: { type: GraphQLString },
    serial: { type: GraphQLString },
    uuid: { type: GraphQLString },
    sku: { type: GraphQLString },
  }),
});

// Bios Type
const BiosType = new GraphQLObjectType({
  name: "bios",
  fields: () => ({
    vendor: { type: GraphQLString },
    version: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    revision: { type: GraphQLString },
  }),
});

// Baseboard Type
const BaseboardType = new GraphQLObjectType({
  name: "baseboard",
  fields: () => ({
    manufacturer: { type: GraphQLString },
    model: { type: GraphQLString },
    version: { type: GraphQLString },
    serial: { type: GraphQLString },
    serial: { type: GraphQLString },
    assetTag: { type: GraphQLString },
  }),
});

// Chassis Type
const ChassisType = new GraphQLObjectType({
  name: "chassis",
  fields: () => ({
    manufacturer: { type: GraphQLString },
    model: { type: GraphQLString },
    type: { type: GraphQLString },
    version: { type: GraphQLString },
    serial: { type: GraphQLString },
    serial: { type: GraphQLString },
    assetTag: { type: GraphQLString },
    sku: { type: GraphQLString },
  }),
});

// Hardware Root Query
const HardwareRootQueryType = new GraphQLObjectType({
  name: "HardwareQuery",
  description: "hardware information",
  fields: {
    system: {
      type: SystemType,
      resolve(parent, args) {
        return si.system().then((data) => data);
      },
    },
    bios: {
      type: BiosType,
      resolve(parent, args) {
        return si.bios().then((data) => data);
      },
    },
    baseboard: {
      type: BaseboardType,
      resolve(parent, args) {
        return si.baseboard().then((data) => data);
      },
    },
    chassis: {
      type: ChassisType,
      resolve(parent, args) {
        return si.chassis().then((data) => data);
      },
    },
  },
});

module.exports = HardwareRootQueryType;
