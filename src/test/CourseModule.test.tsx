import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import ModuleList, {
  ALL_MODULES,
} from "../components/course/students/moduleList";

const GET_MODULES_SUCCESS_MOCK = {
  request: {
    query: ALL_MODULES,
  },
  result: {
    data: {
      allCourseModules: [
        {
          id: "1",
          moduleTitle: "Histoire",
          courses: [
            {
              id: "1",
              courseTitle: "Moyen Age",
              comments: "J'aime le moyen age",
              isValidated: "TRUE",
            },
            {
              id: "2",
              courseTitle: "Grammaire",
              comments: "jest se mock de nous",
              isValidated: "FALSE",
            },
            {
              id: "3",
              courseTitle: "additions",
              comments: "au secours ! ",
              isValidated: "INPROGRESS",
            },
          ],
        },
        {
          id: "2",
          moduleTitle: "Français",
          courses: [
            {
              id: "1",
              courseTitle: "Moyen Age",
              comments: "J'aime le moyen age",
              isValidated: "TRUE",
            },
            {
              id: "2",
              courseTitle: "Grammaire",
              comments: "jest se mock de nous",
              isValidated: "FALSE",
            },
            {
              id: "3",
              courseTitle: "additions",
              comments: "au secours ! ",
              isValidated: "INPROGRESS",
            },
          ],
        },
        {
          id: "3",
          moduleTitle: "Maths",
          courses: [
            {
              id: "1",
              courseTitle: "Moyen Age",
              comments: "J'aime le moyen age",
              isValidated: "TRUE",
            },
            {
              id: "2",
              courseTitle: "Grammaire",
              comments: "jest se mock de nous",
              isValidated: "FALSE",
            },
            {
              id: "3",
              courseTitle: "additions",
              comments: "au secours ! ",
              isValidated: "INPROGRESS",
            },
          ],
        },
      ],
    },
  },
};

const GET_MODULES_ERROR_MOCK = {
  request: {
    query: ALL_MODULES,
  },
  error: new Error("Unable to reach server."),
};

describe("ModuleList", () => {
  describe("while fetching modules", () => {
    it("renders loading", () => {
      render(
        <MockedProvider mocks={[GET_MODULES_SUCCESS_MOCK]} addTypename={false}>
          <ModuleList />
        </MockedProvider>
      );

      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("when unable to reach server", () => {
    it("renders error", async () => {
      render(
        <MockedProvider mocks={[GET_MODULES_ERROR_MOCK]} addTypename={false}>
          <ModuleList />
        </MockedProvider>
      );

      const errorMessage = await waitFor(() => screen.getByText("Error :"));

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("when fetching wilders succeeded", () => {
    it("renders modules", async () => {
      render(
        <MockedProvider mocks={[GET_MODULES_SUCCESS_MOCK]} addTypename={false}>
          <ModuleList />
        </MockedProvider>
      );

      const list = await waitFor(() => screen.getByTestId("modules"));

      const listItems = within(list).getAllByTestId("course");
      expect(listItems).toHaveLength(3);

      const btn = await waitFor(() => {
        return screen.queryAllByTestId("submit-btn");
      });

      expect(listItems[0]).toHaveTextContent(/Histoire/);
      expect(listItems[1]).toHaveTextContent(/Français/);
      expect(listItems[2]).toHaveTextContent(/Maths/);

      expect(btn).not.toBeNull();
    });
  });
});
