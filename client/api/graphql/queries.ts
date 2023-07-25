import { gql, useQuery } from "@apollo/client";

export const GET_UserMedications = gql`
  query GET_UserMedications {
    UserMedications {
      id
      username
      medications {
        id
      }
    }
  }
`;
