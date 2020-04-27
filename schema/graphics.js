const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const si = require("systeminformation");

const ControllerType = new GraphQLObjectType({
  name: "controller",
  fields: () => ({
    model: { type: GraphQLString },
    vendor: { type: GraphQLString },
    bus: { type: GraphQLString },
    vram: { type: GraphQLString },
    vramDynamic: { type: GraphQLString },
  }),
});

const DisplayType = new GraphQLObjectType({
  name: "display",
  fields: () => ({
    model: { type: GraphQLString },
    vendor: { type: GraphQLString },
    main: { type: GraphQLString },
    builtin: { type: GraphQLString },
    connection: { type: GraphQLString },
    sizex: { type: GraphQLString },
    sizey: { type: GraphQLString },
    pixeldepth: { type: GraphQLString },
    resolutionx: { type: GraphQLString },
    resolutiony: { type: GraphQLString },
    currentResX: { type: GraphQLString },
    currentResY: { type: GraphQLString },
    positionX: { type: GraphQLString },
    positionY: { type: GraphQLString },
    currentRefreshRate: { type: GraphQLString },
  }),
});

const GraphicsRootQueryType = new GraphQLObjectType({
  name: "GraphicsQuery",
  description: "Graphics information object ",
  fields: () => ({
    controller: {
      type: ControllerType,
      description: " Single controller",
      args: {
        model: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const controller_data = await si
          .graphics()
          .then((data) => data.controllers);
        return controller_data.find((item) => item.model === args.model);
      },
    },
    controllers: {
      type: new GraphQLList(ControllerType),
      description: " List all controllers",
      async resolve() {
        const controller_data = await si
          .graphics()
          .then((data) => data.controllers);
        return controller_data;
      },
    },
    display: {
      type: DisplayType,
      description: " Single display",
      args: {
        model: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const display_data = await si.graphics().then((data) => data.displays);
        return display_data.find((item) => item.model === args.model);
      },
    },
    displays: {
      type: new GraphQLList(DisplayType),
      description: " List all displays",
      async resolve() {
        const display_data = await si.graphics().then((data) => data.displays);
        return display_data;
      },
    },
  }),
});

module.exports = GraphicsRootQueryType;
