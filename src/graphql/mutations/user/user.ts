import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      id
      firstname
      lastname
      email
      town
      role
      campus {
        name
      }
      mood {
        name
        icon
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      firstname
      lastname
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($input: UserInput!) {
    updateUser(input: $input) {
      id
      firstname
      lastname
      email
      town
      role
      campus {
        name
      }
    }
  }
`;
