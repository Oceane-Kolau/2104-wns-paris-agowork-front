import styled, { keyframes } from "styled-components";
import { colors } from "./global";

const variables = {
  size: "2em",
  border1: "25%",
  border2: "calc(100% - 25%)",
};

const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.svg`
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% ${variables.border1},
    ${variables.border1} ${variables.border1},
    ${variables.border1} ${variables.border2},
    ${variables.border2} ${variables.border2},
    ${variables.border2} ${variables.border1},
    100% ${variables.border1},
    100% 100%,
    0% 100%
  );
  animation: ${spin} 1.25s ease infinite;
  background: ${colors.bpLinearGradient};
  content: "";
  height: 200%;
  width: 200%;
  top: -50%;
  left: -50%;
  height: ${variables.size};
  width: ${variables.size};
  margin: auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  text-align: center;
  margin: auto;
`;
