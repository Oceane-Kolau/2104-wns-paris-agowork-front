import React from "react";
import { ColoredButton, ContainerButton } from "../../assets/styles/global";

const SolidButton = ({ textButton, type }: any): JSX.Element => {
  return (
    <ContainerButton>
      <ColoredButton type={type} variant="contained">
        {textButton}
      </ColoredButton>
    </ContainerButton>
  );
};

export default SolidButton;
