const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const si = require("systeminformation");

// CPU Type
const MemoryType = new GraphQLObjectType({
  name: "Memory",
  fields: () => ({
    total: { type: GraphQLString },
    free: { type: GraphQLString },
    speed: { type: GraphQLString },
    used: { type: GraphQLString },
    active: { type: GraphQLString },
    buffcache: { type: GraphQLString },
    buffers: { type: GraphQLString },
    cached: { type: GraphQLString },
    slab: { type: GraphQLString },
    available: { type: GraphQLString },
    swaptotal: { type: GraphQLString },
    swapused: { type: GraphQLString },
    swapfree: { type: GraphQLString },
  }),
});
// Layout Type
const LayoutType = new GraphQLObjectType({
  name: "layout",
  fields: () => ({
    size: { type: GraphQLString },
    bank: { type: GraphQLString },
    type: { type: GraphQLString },
    clockSpeed: { type: GraphQLString },
    formFactor: { type: GraphQLString },
    manufacturer: { type: GraphQLString },
    partNum: { type: GraphQLString },
    serialNum: { type: GraphQLString },
    voltageConfigured: { type: GraphQLString },
    voltageMin: { type: GraphQLString },
    voltageMax: { type: GraphQLString },
  }),
});
// Memory Root Query
const MemoryRootQueryType = new GraphQLObjectType({
  name: "MemoryQuery",
  description: "Main Memory query ",
  fields: {
    memory: {
      type: MemoryType,
      description: "Memory fields information",
      resolve() {
        return si.mem().then((data) => data);
      },
    },
    layout: {
      type: LayoutType,
      description: " Single layout",
      args: { bank: { type: GraphQLString } },
      async resolve(parent, args) {
        const data = await si.memLayout().then((data) => data);
        return data.find((item) => item.bank === args.bank);
      },
    },
    layouts: {
      type: new GraphQLList(LayoutType),
      description: " List all layouts",
      async resolve() {
        const layout_data = await si.memLayout().then((data) => data);
        return layout_data;
      },
    },
  },
});

module.exports = MemoryRootQueryType;
