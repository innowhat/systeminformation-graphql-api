const { GraphQLObjectType, GraphQLString } = require("graphql");
const si = require("systeminformation");

// Battery Type
const BatteryType = new GraphQLObjectType({
  name: "BatteryRootQuery",
  fields: () => ({
    hasbattery: { type: GraphQLString },
    cyclecount: { type: GraphQLString },
    ischarging: { type: GraphQLString },
    designedcapacity: { type: GraphQLString },
    maxcapacity: { type: GraphQLString },
    currentcapacity: { type: GraphQLString },
    capacityUnit: { type: GraphQLString },
    voltage: { type: GraphQLString },
    percent: { type: GraphQLString },
    timeremaining: { type: GraphQLString },
    acconnected: { type: GraphQLString },
    type: { type: GraphQLString },
    model: { type: GraphQLString },
    manufacturer: { type: GraphQLString },
    serial: { type: GraphQLString },
  }),
});

// Battery Root Query
const BatteryRootQueryType = new GraphQLObjectType({
  name: "BatteryQuery",
  fields: {
    battery: {
      type: BatteryType,
      resolve(parent, args) {
        return si.battery().then((data) => data);
      },
    },
  },
});

module.exports = BatteryRootQueryType;
