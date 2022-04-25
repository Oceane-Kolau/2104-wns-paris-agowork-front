import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";

import Course, {
  UPDATE_ISVALIDATED,
} from "../components/course/students/course";

describe("when button fuction", () => {
  it("function button", async () => {
    const mocks = [
      {
        request: {
          query: UPDATE_ISVALIDATED,
          variables: {
            input: { id: "1", isValidated: "", comments: "" },
          },
        },
        newData: jest.fn(() => ({
          data: {
            updateIsValidated: {
              id: "1",
              isValidated: "",
              comments: "",
            },
          },
        })),
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Course
          id="1"
          courseTitle="Moyen Age"
          comments="J'aime le moyen age"
          isValidated="TRUE"
        />
      </MockedProvider>
    );
    userEvent.click(screen.getAllByTestId("submit-btn")[0]);
    userEvent.click(screen.getAllByTestId("submit-btn")[0]);
    await waitFor(() => expect(mocks[0].newData).toHaveBeenCalledTimes(2));
  });
});
