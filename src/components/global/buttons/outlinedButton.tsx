import React from "react";
import { ColoredButton, ContainerButton } from "../../../assets/styles/global";

const OutlinedButton = ({ textButton, type, link }: any): JSX.Element => {
  return (
    <ContainerButton>
      <ColoredButton type={type} variant="contained">
        {textButton}
      </ColoredButton>
    </ContainerButton>
  );
};

export default OutlinedButton;
