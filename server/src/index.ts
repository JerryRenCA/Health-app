import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotnet from "dotenv";
import { ApolloServer } from "@apollo/server";
import { resolvers, typeDefs } from "./graphql";

dotnet.config();

const app = express();
const port = process.env.PORT || 4000;

const bootstrapServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));
  app.get("/", (req, res) => res.send("Works!"));
  app.listen({ port }, () => {
    console.log(`Express ready at http://localhost:${port}`);
    console.log(`Graphql ready at http://localhost:${port}/graphql`);
  });
};

bootstrapServer();
