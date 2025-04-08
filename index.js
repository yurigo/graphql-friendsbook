import { typedefs } from "./typedefs.js";
import { resolvers } from "./resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createHandler } from "graphql-http/lib/use/express";
import express from "express";
import { ruruHTML } from "ruru/server";

// Construct a schema, using GraphQL schema language
const schema = makeExecutableSchema({
  typeDefs: typedefs,
  resolvers: resolvers,
});

const app = express();

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
  })
);

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.get("/users" /*---*/);
app.get("/posts" /*---*/);

// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
