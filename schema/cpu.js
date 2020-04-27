const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const si = require("systeminformation");

// CPU Type
const CpuType = new GraphQLObjectType({
  name: "cpu",
  fields: () => ({
    manufacturer: { type: GraphQLString },
    brand: { type: GraphQLString },
    speed: { type: GraphQLString },
    speedmin: { type: GraphQLString },
    speedmax: { type: GraphQLString },
    governor: { type: GraphQLString },
    cores: { type: GraphQLString },
    physicalCores: { type: GraphQLString },
    processors: { type: GraphQLString },
    socket: { type: GraphQLString },
    vendor: { type: GraphQLString },
    family: { type: GraphQLString },
    model: { type: GraphQLString },
    stepping: { type: GraphQLString },
    revision: { type: GraphQLString },
    voltage: { type: GraphQLString },
  }),
});

// Cache Type
const CacheType = new GraphQLObjectType({
  name: "cache",
  fields: () => ({
    l1d: { type: GraphQLString },
    l1i: { type: GraphQLString },
    l2: { type: GraphQLString },
    l3: { type: GraphQLString },
  }),
});

// Currentspeed Type
const CurrentSpeedType = new GraphQLObjectType({
  name: "currentspeed",
  fields: () => ({
    avg: { type: GraphQLString },
    min: { type: GraphQLString },
    max: { type: GraphQLString },
  }),
});

// Temperature Type
const TemperatureType = new GraphQLObjectType({
  name: "temperature",
  fields: () => ({
    main: { type: GraphQLString },
    max: { type: GraphQLString },
  }),
});

// Flag Type
const FlagType = new GraphQLObjectType({
  name: "flag",
  fields: () => ({
    string: { type: GraphQLString },
  }),
});

// Root Query
const CpuRootQueryType = new GraphQLObjectType({
  name: "CpuQuery",
  description: "CPU information object ",
  fields: {
    cpu: {
      type: CpuType,
      resolve() {
        return si.cpu().then((data) => data);
      },
    },
    cache: {
      type: CacheType,
      resolve() {
        return si.cpuCache().then((data) => data);
      },
    },

    currentspeed: {
      type: CurrentSpeedType,
      resolve() {
        return si.cpuCurrentspeed().then((data) => data);
      },
    },

    temperature: {
      type: TemperatureType,
      resolve() {
        return si.cpuTemperature().then((data) => data);
      },
    },
    flag: {
      type: FlagType,
      resolve() {
        return si.cpuFlags().then((data) => {
          return { string: data };
        });
      },
    },
  },
});

module.exports = CpuRootQueryType;
