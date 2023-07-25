// import { GraphQLResolveInfo } from "graphql";
// import { createUser, deleteUser, getUser, getUsers, updateUser } from "../services/user.service";

// export const usersResolver = {
//   Query: {
//     async users(_: void, args: Record<string,any>, context: any, info: GraphQLResolveInfo) {
//       return await getUsers({ info });
//     },
//     async user(
//       _: void,
//       args: Record<string,any>,
//       context: any,
//       info: GraphQLResolveInfo
//     ) {
//       return await getUser({ id: args.id, info });
//     },
//   },
//   Mutation: {
//     async createMedication(_: void, args: Record<string, any>) {
//         console.log(args);
//       return await createUser({ email: args.input.email, username: args.input.username });
//     },
//     async updateUser(_: void,args: Record<string, any>) {
//         console.log(args);
//       return await updateUser({ email: args.input.email, username: args.input.username },args.id);
//     },
//     async deleteUser(_: void,args: Record<string, any>) {
//         return await deleteUser(args.id);
//     },
//   },
// };
