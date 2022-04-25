import { gql } from "@apollo/client";

export const GET_ALL_MOODS = gql`
  query getMoods {
    getMoods {
      id
      name
      icon
    }
  }
`;
