const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const si = require("systeminformation");

const VersionsType = new GraphQLObjectType({
  name: "versions",
  fields: () => ({
    kernel: { type: GraphQLString },
    openssl: { type: GraphQLString },
    systemOpenssl: { type: GraphQLString },
    systemOpensslLib: { type: GraphQLString },
    node: { type: GraphQLString },
    v8: { type: GraphQLString },
    npm: { type: GraphQLString },
    yarn: { type: GraphQLString },
    pm2: { type: GraphQLString },
    gulp: { type: GraphQLString },
    grunt: { type: GraphQLString },
    tsc: { type: GraphQLString },
    mysql: { type: GraphQLString },
    redis: { type: GraphQLString },
    mongodb: { type: GraphQLString },
    apache: { type: GraphQLString },
    nginx: { type: GraphQLString },
    docker: { type: GraphQLString },
    postfix: { type: GraphQLString },
    postgresql: { type: GraphQLString },
    python: { type: GraphQLString },
    python3: { type: GraphQLString },
    java: { type: GraphQLString },
    gcc: { type: GraphQLString },
    virtualbox: { type: GraphQLString },
  }),
});

const InfoType = new GraphQLObjectType({
  name: "info",
  fields: () => ({
    platform: { type: GraphQLString },
    distro: { type: GraphQLString },
    release: { type: GraphQLString },
    codename: { type: GraphQLString },
    kernel: { type: GraphQLString },
    arch: { type: GraphQLString },
    codepage: { type: GraphQLString },
    logofile: { type: GraphQLString },
    serial: { type: GraphQLString },
    build: { type: GraphQLString },
    servicepack: { type: GraphQLString },
    uefi: { type: GraphQLString },
  }),
});

const UsersType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    user: { type: GraphQLString },
    tty: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
    ip: { type: GraphQLString },
    command: { type: GraphQLString },
  }),
});

const UuidType = new GraphQLObjectType({
  name: "uuid",
  fields: () => ({
    os: { type: GraphQLString },
  }),
});

const ShellType = new GraphQLObjectType({
  name: "shell",
  fields: () => ({
    string: { type: GraphQLString },
  }),
});

// OS Root Query
const OsRootQueryType = new GraphQLObjectType({
  name: "OsQuery",
  description: "Operating system information object ",
  fields: {
    info: {
      type: InfoType,
      description: "OS information",
      resolve(parent, args) {
        return si.osInfo().then((data) => data);
      },
    },
    versions: {
      type: VersionsType,
      description: `Version information of
      node and dev software packages
      optional apps param (string,
      comma or space seperated)
      only those apps are detected`,
      resolve(parent, args) {
        return si.versions().then((data) => data);
      },
    },
    user: {
      type: UsersType,
      args: { user: { type: GraphQLString } },
      description: `single user online`,
      async resolve(parent, args) {
        const data = await si.users().then((data) => data);
        return data.find((item) => item.user === args.user);
      },
    },
    users: {
      type: new GraphQLList(UsersType),
      description: `List of users online`,
      async resolve() {
        const data = await si.users().then((data) => data);
        return data;
      },
    },
    uuid: {
      type: UuidType,
      description: `Object of several UUIDs`,
      resolve(parent, args) {
        return si.uuid().then((data) => data);
      },
    },
    shell: {
      type: ShellType,
      description: `Standard shell`,
      resolve(parent, args) {
        return si.shell().then((data) => {
          return { string: data };
        });
      },
    },
  },
});

module.exports = OsRootQueryType;
