import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import dotenv from "dotenv"
dotenv.config()

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = parseInt(process.env.PORT || "4000", 10);

startStandaloneServer(server, {
  listen: { port: PORT },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});