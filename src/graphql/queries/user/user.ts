import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      firstname
      lastname
      email
      role
      picture
      mood {
        icon
        name
      }
      campus {
        name
      }
    }
  }
`;

export const GET_STUDENTS_MOOD = gql`
  query getAllStudentsByMood {
    getAllStudentsByMood {
      id
      firstname
      lastname
      picture
      mood {
        name
        icon
      }
    }
  }
`;

export const GET_LOGGED_USER = gql`
  query getLoggedUserByEmail {
    getLoggedUserByEmail {
      firstname
      lastname
      id
      campus {
        name
      }
      mood {
        id
        icon
        name
      }
    }
  }
`;

export const GET_ONE_USER = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      firstname
      lastname
      email
      town
      role
      picture
      campus {
        id
        name
      }
    }
  }
`;
