// import { PrismaClient } from "@prisma/client";
// import { extractSelections } from "../utils/extractSelections";
// import { GraphQLResolveInfo } from "graphql";

// interface GetUsersArgs {
//   info: GraphQLResolveInfo;
// }
// interface GetUserArgs extends GetUsersArgs {
//   id: string;
// }

// interface UserInput {
//   email: string;
//   username?: string;
// }

// const prisma = new PrismaClient();

// export const getUsers = async ({ info }: GetUsersArgs) => {
//   const extractedSelections = extractSelections(info);
//   const medicationIncluded = extractedSelections.includes("medications");
//   if (medicationIncluded)
//     return await prisma.user.findMany({ include: { medications: true } });
//   return await prisma.user.findMany();
// };

// export const getUser = async ({ id, info }: GetUserArgs) => {
//   const extractedSelections = extractSelections(info);
//   const medicationIncluded = extractedSelections.includes("medications");
//   if (medicationIncluded)
//     return await prisma.user.findUnique({
//       where: { id },
//       include: { medications: true },
//     });
//   return await prisma.user.findUnique({ where: { id } });
// };

// //Mutation
// // export const createUser = async ({ email, username }: UserInput) => {
// //     console.log(email,username);
// //   const createUser = await prisma.user.create({ data: { email, username } });
// //   return createUser;
// // };
// // export const updateUser = async ({ email, username }: UserInput,id:string) => {
// //     console.log(email,username);
// //   const updateUser = await prisma.user.update({ data: { email, username },where:{id} });
// //   return updateUser;
// // };
// // export const deleteUser = async (id:string) => {
// //     console.log(id);
// //   const updateUser = await prisma.user.delete({ where:{id} });
// //   return updateUser;
// // };
