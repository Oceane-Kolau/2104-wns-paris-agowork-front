import { gql } from "@apollo/client";

export const DELETE_MOOD = gql`
  mutation deleteMood($id: ID!) {
    deleteMood(id: $id) {
      id
      name
      icon
    }
  }
`;

export const CREATE_MOOD = gql`
  mutation createMood($input: MoodInput!) {
    createMood(input: $input) {
      id
      name
      icon
    }
  }
`;

export const UPDATE_USER_MOOD = gql`
  mutation updateUserMood($id: ID!, $email: String!) {
    updateUserMood(id: $id, email: $email) {
      mood {
        id
        icon
        name
      }
    }
  }
`;
