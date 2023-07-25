import { PrismaClient } from "@prisma/client";
import { extractSelections } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";

interface GetUsersArgs {
  info: GraphQLResolveInfo;
}
interface GetUserArgs extends GetUsersArgs {
  id: string;
}

const prisma = new PrismaClient();

export const getUser = async ({ id, info }: GetUserArgs) => {
  const extractedSelections = extractSelections(info);
  // const postIncluded = extractedSelections.includes("medications");
  // if (postIncluded)
  //   return await prisma.user.findUnique({
  //     where: { id },
  //     include: { medications: true },
  //   });
  return await prisma.user.findUnique({ where: { id } });
};
