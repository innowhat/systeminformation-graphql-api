const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const si = require("systeminformation");

// WifiNetworks Type
const WifiNetworksType = new GraphQLObjectType({
  name: "WifiNetworks",
  description: "information about available wifi networks",
  fields: () => ({
    ssid: { type: GraphQLString, description: "Wifi network SSID" },
    bssid: { type: GraphQLString, description: "BSSID (mac)" },
    mode: { type: GraphQLString, description: "mode" },
    channel: { type: GraphQLString, description: "channel" },
    frequency: { type: GraphQLString, description: "frequengy in MHz" },
    signalLevel: { type: GraphQLString, description: "signal level in dB" },
    quality: { type: GraphQLString, description: "quaility in %" },
  }),
});

// Wifi Network Root Query
const WifiNetworksRootQueryType = new GraphQLObjectType({
  name: "WifiNetworksQuery",
  description: `information about available wifi networks`,
  fields: () => ({
    wifiNetwork: {
      type: WifiNetworksType,
      description: " Single available wifi",
      args: {
        ssid: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await si.wifiNetworks().then((data) => data);
        return data.find((item) => item.ssid === args.ssid);
      },
    },

    wifiNetworks: {
      type: new GraphQLList(WifiNetworksType),
      description: "List of available wifi networks",
      async resolve() {
        const data = await si.wifiNetworks().then((data) => data);
        return data;
      },
    },
  }),
});

module.exports = WifiNetworksRootQueryType;
