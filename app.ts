import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import typeDefs from "./model";

const app = express();

//Body parser(from node)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = new ApolloServer({
  typeDefs,
  //resolvers
});

await server.start();

app.use("/graphql", expressMiddleware(server));

app.listen({ port: 4000 }, () =>
  console.log("server started on localhost:4000")
);
