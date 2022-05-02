import { gql } from "@apollo/client";

export const GET_ALL_RESSOURCES = gql`
  query GetAllRessources {
    getAllRessources {
      id
      title
      author
      link
      description
      tags
      updatedAt
    }
  }
`;

export const GET_ONE_RESSOURCE = gql`
  query GetRessourceById($id: ID!) {
    getRessourceById(id: $id) {
      title
      author
      description
      link
      tags
    }
  }
`;
