import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import { GET_ONE_USER } from "../graphql/queries/user/user";
import UserUpdate from "../pages/admin/user/userUpdate";
const mocks = [
  {
    request: {
      query: GET_ONE_USER,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        getUserById : {
          id: "1",
          firstname: "firstname1",
          lastname: "lastname1",
          email: "email1@gmail.com",
          town: "Cannes",
          role: "STUDENT",
          picture: "",
          campus: {
            name: "Paris",
            id: "2",
          },
        }
      },
    },
  },
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "1",
  }),
  useRouteMatch: () => ({ url: "/utilisateur/:id" }),
}));

it("render the user", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserUpdate />
    </MockedProvider>,
  );

  const firstnameInput = await waitFor(() => screen.getByDisplayValue('firstname1'));
  const lastnameInput = await waitFor(() => screen.getByDisplayValue('lastname1'));
  const emailInput = await waitFor(() => screen.getByDisplayValue('email1@gmail.com'));
  const townInput = await waitFor(() => screen.getByDisplayValue('Cannes'));
  expect(firstnameInput).toHaveValue("firstname1");
  expect(lastnameInput).toHaveValue("lastname1");
  expect(emailInput).toHaveValue("email1@gmail.com");
  expect(townInput).toHaveValue("Cannes");
});
