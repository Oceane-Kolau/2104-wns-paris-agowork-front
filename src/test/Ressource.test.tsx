import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import RessourceListing from "../components/ressource/ressourceListing";
import { GET_ALL_RESSOURCES } from "../graphql/queries/ressource/ressource";

const GET_RESSOURCES_SUCCESS_MOCK = {
  request: {
    query: GET_ALL_RESSOURCES,
  },
  result: {
    data: {
      getAllRessources: [
        {
          id: "1",
          title: "On sait depuis longtemps",
          author: "firstname1 lastname1",
          link: "https://jobeet-tutorial.readthedocs.io/en/latest/days/",
          description: "Ceci est un test pour voir",
          tags: ["MUI", "Google", " CSS"],
          updatedAt: '1651680133496',
        },
        {
          id: "2",
          title: "On sait",
          author: "firstname2 lastname3",
          link: "https://jobeet",
          description: "Ceci est un test pour voir si tout fonctionne un peu",
          tags: ["MUI", "Google", " CSS"],
          updatedAt: '1651680133496',
        },
        {
          id: "3",
          title: "depuis longtemps",
          author: "firstname3 lastname3",
          link: "https://latest/days/",
          description: "Ceci est un test pour voir si tout fonctionne",
          tags: ["MUI", "GraphQL", " CSS"],
          updatedAt: '1651680133496',
        },
      ],
    },
  },
};

const GET_MODULES_ERROR_MOCK = {
  request: {
    query: GET_ALL_RESSOURCES,
  },
  error: new Error("Unable to reach server."),
};

describe("Testing ressources list", () => {
  describe("while fetching modules", () => {
    it("renders loading", () => {
      render(
        <MockedProvider
          mocks={[GET_RESSOURCES_SUCCESS_MOCK]}
          addTypename={false}
        >
          <RessourceListing />
        </MockedProvider>,
      );

      expect(screen.getByTestId("loading")).toBeInTheDocument();
    });
  });

  describe("when unable to reach server", () => {
    it("renders error", async () => {
      render(
        <MockedProvider mocks={[GET_MODULES_ERROR_MOCK]} addTypename={false}>
          <RessourceListing />
        </MockedProvider>,
      );

      const errorMessage = await waitFor(() => screen.getByText("ERROR"));

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("when fetching ressources succeeded", () => {
    it("renders ressources cards", async () => {
      render(
        <MockedProvider
          mocks={[GET_RESSOURCES_SUCCESS_MOCK]}
          addTypename={false}
        >
          <RessourceListing />
        </MockedProvider>,
      );

      const list = await waitFor(() => screen.getByTestId("ressources"));

      const listItems = within(list).getAllByTestId("ressource");
      expect(listItems).toHaveLength(3);

      expect(listItems[0]).toHaveTextContent(/On sait depuis longtemps/);
      expect(listItems[1]).toHaveTextContent(/On sait/);
      expect(listItems[2]).toHaveTextContent(/depuis longtemps/);
    });
  });
});
