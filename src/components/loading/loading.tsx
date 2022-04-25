import React from "react";
import { Spinner, LoadingContainer } from "../../assets/styles/loading";

const Loading = (): JSX.Element => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
