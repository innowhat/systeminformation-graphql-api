const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const si = require("systeminformation");

// DiskLayout Type
const DiskLayoutType = new GraphQLObjectType({
  name: "diskLayout",
  description: "physical disk layout (array)",
  fields: () => ({
    device: { type: GraphQLString, description: "e.g. /dev/sda" },
    type: { type: GraphQLString, description: "HD, SSD, NVMe" },
    name: { type: GraphQLString, description: "disk name" },
    vendor: { type: GraphQLString, description: "vendor/producer" },
    size: { type: GraphQLString, description: "size in bytes" },
    totalCylinders: { type: GraphQLString, description: "total cylinders" },
    totalHeads: { type: GraphQLString, description: "total heads" },
    totalTracks: { type: GraphQLString, description: "total tracks" },
    totalSectors: { type: GraphQLString, description: "total sectors" },
    tracksPerCylinder: {
      type: GraphQLString,
      description: "tracks per cylinder",
    },
    sectorsPerTrack: { type: GraphQLString, description: "sectors per track" },
    bytesPerSector: { type: GraphQLString, description: "bytes per sector" },
    firmwareRevision: { type: GraphQLString, description: "firmware revision" },
    serialNum: { type: GraphQLString, description: "serial number" },
    interfaceType: { type: GraphQLString, description: "SATA, PCIe, ..." },
    smartStatus: {
      type: GraphQLString,
      description: "S.M.A.R.T Status (see Known Issues)",
    },
  }),
});
// BlockDevices Type
const BlockDevicesType = new GraphQLObjectType({
  name: "blockDevices",
  description: "returns array of disks, partitions, raids and roms",
  fields: () => ({
    name: { type: GraphQLString, description: "name" },
    type: { type: GraphQLString, description: "type" },
    fstype: {
      type: GraphQLString,
      description: "file system type (e.g. ext4)",
    },
    mount: { type: GraphQLString, description: "mount point" },
    size: { type: GraphQLString, description: "size in bytes" },
    physical: {
      type: GraphQLString,
      description: "physical type (HDD, SSD, CD/DVD)",
    },
    uuid: { type: GraphQLString, description: "UUID" },
    label: { type: GraphQLString, description: "label" },
    model: { type: GraphQLString, description: "model" },
    serial: { type: GraphQLString, description: "serial" },
    removable: { type: GraphQLString, description: "serial" },
    protocol: {
      type: GraphQLString,
      description: "protocol (SATA, PCI-Express, ...)",
    },
  }),
});
// DisksIO Type
const DisksIOType = new GraphQLObjectType({
  name: "disksIO",
  description: "current transfer stats",
  fields: () => ({
    rIO: { type: GraphQLString, description: "read IOs on all mounted drives" },
    wIO: {
      type: GraphQLString,
      description: "write IOs on all mounted drives",
    },
    tIO: {
      type: GraphQLString,
      description: "write IOs on all mounted drives",
    },
    rIO_sec: {
      type: GraphQLString,
      description: "read IO per sec (* see notes)",
    },
    wIO_sec: {
      type: GraphQLString,
      description: "write IO per sec (* see notes)",
    },
    tIO_sec: {
      type: GraphQLString,
      description: "total IO per sec (* see notes)",
    },
    ms: {
      type: GraphQLString,
      description: "interval length (for per second values)",
    },
  }),
});
// FsSize Type
const FsSizeType = new GraphQLObjectType({
  name: "fsSize",
  description: "returns array of mounted file systems",
  fields: () => ({
    fs: { type: GraphQLString, description: "name of file system" },
    type: { type: GraphQLString, description: "type of file system" },
    size: { type: GraphQLString, description: "sizes in bytes" },
    used: { type: GraphQLString, description: "used in bytes" },
    use: { type: GraphQLString, description: "used in %" },
    mount: { type: GraphQLString, description: "mount point" },
  }),
});
// FsSize Type
const FsOpenFilesType = new GraphQLObjectType({
  name: "fsOpenFiles",
  description: "count max/allocated file descriptors",
  fields: () => ({
    max: { type: GraphQLString, description: "count max" },
    allocated: { type: GraphQLString, description: "count allocated" },
    available: { type: GraphQLString, description: "count available" },
  }),
});
// FsStats Type
const FsStatsType = new GraphQLObjectType({
  name: "fsStats",
  description: "current transfer stats",
  fields: () => ({
    rx: { type: GraphQLString, description: "bytes read since startup" },
    wx: { type: GraphQLString, description: "bytes written since startup" },
    tx: {
      type: GraphQLString,
      description: "total bytes read + written since startup",
    },
    rx_sec: {
      type: GraphQLString,
      description: "bytes read / second (* see notes)",
    },
    wx_sec: {
      type: GraphQLString,
      description: "bytes written / second (* see notes)",
    },
    tx_sec: {
      type: GraphQLString,
      description: "total bytes reads + written / second",
    },
    ms: {
      type: GraphQLString,
      description: "interval length (for per second values)",
    },
  }),
});

// Disk Root Query
const DiskRootQueryType = new GraphQLObjectType({
  name: "DiskQuery",
  description: "Disk Layout, Block Devices and Disks IO",
  fields: () => ({
    diskLayout: {
      type: new GraphQLList(DiskLayoutType),
      description: " physical disk layout (array)",
      async resolve() {
        const data = await si.diskLayout().then((data) => data);
        return data;
      },
    },
    blockDevices: {
      type: new GraphQLList(BlockDevicesType),
      description: "returns array of disks, partitions, raids and roms",
      async resolve() {
        const data = await si.blockDevices().then((data) => data);
        return data;
      },
    },
    disksIO: {
      type: DisksIOType,
      description: "current transfer stats",
      resolve(parent, args) {
        return si.disksIO().then((data) => data);
      },
    },
    FsSize: {
      type: new GraphQLList(FsSizeType),
      description: "returns array of mounted file systems",
      async resolve() {
        const data = await si.fsSize().then((data) => data);
        return data;
      },
    },
    fsOpenFiles: {
      type: FsOpenFilesType,
      description: "count max/allocated file descriptors",
      resolve(parent, args) {
        return si.fsOpenFiles().then((data) => data);
      },
    },
    fsStats: {
      type: FsStatsType,
      description: "current transfer stats",
      resolve(parent, args) {
        return si.fsStats().then((data) => data);
      },
    },
  }),
});

module.exports = DiskRootQueryType;
