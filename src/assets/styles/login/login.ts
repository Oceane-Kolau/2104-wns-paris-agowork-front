import styled from "styled-components";
import { Box } from "@mui/material";
import { colors, shapes } from "../global";

export const LoginContainer = styled(Box)`
  background: ${colors.blueLinearGradient};
  display: flex;
  position: relative;
  flex-grow: 1;
  min-height: 100vh;
`;

export const ColoredContainer = styled.div`
  width: 700px;
  margin-left: -350px;
  margin-top: -350px;
  height: 700px;
  left: 50%;
  top: 50%;
  border-radius: 100%;
  position: absolute;
  background: radial-gradient(
      90.53% 97.67% at 8.89% 16.06%,
      rgb(206, 85, 176) 0%,
      rgb(243, 77, 172) 16.56%,
      rgb(244, 142, 102) 34.71%,
      rgb(240, 184, 50) 50.87%,
      rgb(99, 215, 175) 60.96%,
      rgb(28, 194, 223) 74.2%,
      rgb(5, 128, 230) 87.06%
    )
    center center;
  filter: blur(150px);
  transform: translateZ(0px);
`;

export const LoginCard = styled.div`
  margin: auto;
  width: 620px;
  padding: 62px;
  position: relative;
  background-color: ${colors.lightGrey};
  text-align: center;
  border-radius: ${shapes.borderRadiusB};
  @media only screen and (max-width: 710px) {
    padding: 50px;
    margin-left: 2rem;
    margin-right: 2rem;
  } ;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: -2rem;
  font-size: 45px;
  background-color: ${colors.darkBlue};
  background-image: ${colors.blueLinearGradient};

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const LoginForm = styled.form`
  border-radius: ${shapes.borderRadiusMed};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
  margin-right: 8rem;
  color: #aaa;
  @media only screen and (max-width: 710px) {
    margin-left: 2rem;
    margin-right: 2rem;
  } ;
`;
