const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const path = require("path");
const cors = require("cors");

const app = express();

// Allow cross-origin source
app.use(cors());

// Set up express graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use(express.static("public"));

//Send every path to index.html with exception of /graphql
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server now running on port: ${PORT}`);
  console.log(`GraphQL API endpoint at localhost:${PORT}/graphql`);
  console.log("Press Ctrl+C to quit.");
});
