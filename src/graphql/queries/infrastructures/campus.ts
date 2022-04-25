import { gql } from "@apollo/client";

export const GET_ALL_CAMPUS = gql`
  query getCampus {
    getCampus {
      id
      name
      address
      phone
    }
  }
`;
