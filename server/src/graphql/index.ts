import { read, readFileSync } from "fs";
import path from "path";
import { usersResolver } from "./resolvers/user.resolver";

const userTypes = readFileSync(path.join(__dirname, "typeDefs/user.graphql"), {
  encoding: "utf-8",
});
const medicationTypes = readFileSync(
  path.join(__dirname, "typeDefs/medication.graphql"),
  { encoding: "utf-8" }
);

export const typeDefs = `
    ${userTypes}
    `;
// ${medicationTypes}
export const resolvers = {
  Query: {
    ...usersResolver.Query,
  },
  Mutation: {
    // ...usersResolver.Mutation,
  },
};
