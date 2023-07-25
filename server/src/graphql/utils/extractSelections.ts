import { GraphQLResolveInfo } from "graphql";

const getSelections = (info: GraphQLResolveInfo) => {
  return info.fieldNodes[0].selectionSet?.selections;
};

export const extractSelections = (info: GraphQLResolveInfo) => {
  const selections = getSelections(info);
  if (!selections) return [];
  return selections.reduce<string[]>((acc, selection) => {
    if (selection.kind === "Field") {
      return [...acc, selection.name.value];
    }
    return acc;
  }, []);
};
