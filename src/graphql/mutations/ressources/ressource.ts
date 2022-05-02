import { gql } from "@apollo/client";

export const CREATE_RESSOURCE = gql`
  mutation createRessource($input: RessourceInput!) {
    createRessource(input: $input) {
      title
      description
      link
      tags
    }
  }
`;

export const DELETE_RESSOURCE = gql`
  mutation deleteRessource($id: ID!) {
    deleteRessource(id: $id) {
      title
    }
  }
`;
