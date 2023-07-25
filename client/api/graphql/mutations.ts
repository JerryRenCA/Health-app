import { gql, useQuery, useMutation } from "@apollo/client";

export const Create_User = gql`
  mutation Mutation($input: User!) {
    login(input: $input) {
      id
      email
      username
    }
  }
`;
