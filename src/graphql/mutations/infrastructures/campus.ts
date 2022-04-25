import { gql } from "@apollo/client";

export const CREATE_CAMPUS = gql`
  mutation createCampus($input: CampusInput!) {
    createCampus(input: $input) {
      id
      name
      address
      phone
    }
  }
`;

export const DELETE_CAMPUS = gql`
  mutation deleteCampus($id: ID!) {
    deleteCampus(id: $id) {
      name
    }
  }
`;
