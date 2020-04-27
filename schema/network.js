const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const si = require("systeminformation");

// NetworkInterfaces Type
const NetworkInterfacesType = new GraphQLObjectType({
  name: "networkInterfaces",
  description: "array of network interfaces (objects)",
  fields: () => ({
    iface: { type: GraphQLString, description: "interface" },
    ifaceName: {
      type: GraphQLString,
      description: "interface name (differs on Windows)",
    },
    ip4: { type: GraphQLString, description: "ip4 address" },
    ip6: { type: GraphQLString, description: "ip6 address" },
    mac: { type: GraphQLString, description: "MAC address" },
    internal: {
      type: GraphQLString,
      description: "true if internal interface",
    },
    virtual: { type: GraphQLString, description: "true if virtual interface" },
    operstate: { type: GraphQLString, description: "up / down" },
    type: { type: GraphQLString, description: "wireless / wired" },
    duplex: { type: GraphQLString, description: "duplex (full/half)" },
    mtu: { type: GraphQLString, description: "MUT maximum transmission unit" },
    speed: { type: GraphQLString, description: "Speed in Mbit / s" },
    dhcp: { type: GraphQLString, description: "IP address obtained by DHCP" },
    dnsSuffix: { type: GraphQLString, description: "DNS suffix" },
    ieee8021xAuth: { type: GraphQLString, description: "IEEE 802.1x Auth" },
    ieee8021xState: { type: GraphQLString, description: "IEEE 802.1x State" },
    carrierChanges: { type: GraphQLString, description: "# changes up/down" },
  }),
});

// NetworkInterfaceDefault Type
const NetworkInterfaceDefaultType = new GraphQLObjectType({
  name: "networkInterfaceDefault",
  description: "Get name of default network interface",
  fields: () => ({
    string: { type: GraphQLString },
  }),
});

// NetworkGatewayDefault Type
const NetworkGatewayDefaultType = new GraphQLObjectType({
  name: "networkGatewayDefault",
  description: "get default network gateway ",
  fields: () => ({
    string: { type: GraphQLString },
  }),
});

// NetworkStats Type
const NetworkStatsType = new GraphQLObjectType({
  name: "networkStats",
  description: `current network stats of given interfaces,
    iface list: comma separated,
    iface parameter is optional,
    defaults to first external network interface,
    pass '*' for all interfaces`,
  fields: () => ({
    iface: { type: GraphQLString, description: `interface` },
    operstate: { type: GraphQLString, description: `up / down` },
    rx_bytes: { type: GraphQLString, description: `received bytes overall` },
    rx_dropped: {
      type: GraphQLString,
      description: `received dropped overall`,
    },
    rx_errors: { type: GraphQLString, description: `received errors overall` },
    tx_bytes: { type: GraphQLString, description: `transferred bytes overall` },
    tx_dropped: {
      type: GraphQLString,
      description: `transferred dropped overall`,
    },
    tx_errors: {
      type: GraphQLString,
      description: `transferred errors overall`,
    },
    rx_sec: {
      type: GraphQLString,
      description: `received bytes / second (* see notes)`,
    },
    tx_sec: {
      type: GraphQLString,
      description: `transferred bytes per second (* see notes)`,
    },
    ms: {
      type: GraphQLString,
      description: `interval length (for per second values)`,
    },
  }),
});

// NetworkConnections Type
const NetworkConnectionsType = new GraphQLObjectType({
  name: "networkConnections",
  description: `current network network connections
    returns an array of all connections`,
  fields: () => ({
    protocol: { type: GraphQLString, description: `tcp or udp` },
    localaddress: { type: GraphQLString, description: `local address` },
    localport: { type: GraphQLString, description: `local port` },
    peeraddress: { type: GraphQLString, description: `peer address` },
    peerport: { type: GraphQLString, description: `peer port` },
    state: {
      type: GraphQLString,
      description: `like ESTABLISHED, TIME_WAIT, ...`,
    },
    pid: { type: GraphQLString, description: `process ID` },
    process: { type: GraphQLString, description: `process name` },
  }),
});

// Disk Root Query
const NetworkRootQueryType = new GraphQLObjectType({
  name: "NetworkQuery",
  description: `Get detailed information about network interfaces, 
    network connections and statistics as well as some internet 
    related information (latency, check availability of site):`,
  fields: () => ({
    networkInterface: {
      type: NetworkInterfacesType,
      description: " Single network interface (object)",
      args: {
        iface: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await si.networkInterfaces().then((data) => data);
        return data.find((item) => item.iface === args.iface);
      },
    },
    networkInterfaces: {
      type: new GraphQLList(NetworkInterfacesType),
      description: "List of network interfaces (objects)",
      async resolve() {
        const data = await si.networkInterfaces().then((data) => data);
        return data;
      },
    },
    networkInterfaceDefault: {
      type: NetworkInterfaceDefaultType,
      description: " Get name of default network interface",
      resolve() {
        return si.networkInterfaceDefault().then((data) => {
          return { string: data };
        });
      },
    },
    networkGatewayDefault: {
      type: NetworkGatewayDefaultType,
      description: "get default network gateway",
      resolve() {
        return si.networkGatewayDefault().then((data) => {
          return { string: data };
        });
      },
    },
    networkStats: {
      type: new GraphQLList(NetworkStatsType),
      description: "List of network stats",
      async resolve() {
        const data = await si.networkStats().then((data) => data);
        return data;
      },
    },
    networkConnections: {
      type: new GraphQLList(NetworkConnectionsType),
      description: "List of network connection",
      async resolve() {
        const data = await si.networkConnections().then((data) => data);
        return data;
      },
    },
  }),
});

module.exports = NetworkRootQueryType;
