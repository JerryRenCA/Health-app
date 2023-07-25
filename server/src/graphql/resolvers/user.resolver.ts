import { GraphQLResolveInfo } from "graphql";
import { getUser } from "../services/user.service";

export const usersResolver = {
  Query: {
    async user(
      _: void,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getUser({ id: args.id, info });
    },
  },
  Mutation: {
    async login() {
      return "true";
    },
  },
};
