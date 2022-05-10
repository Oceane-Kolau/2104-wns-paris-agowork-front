import React from "react";
import { Spinner, LoadingContainer } from "../../../assets/styles/loading";

const Loading = (): JSX.Element => {
  return (
    <LoadingContainer data-testid="loading">
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
