import styled from "styled-components";
import { Box } from "@mui/material";
import { colors } from "../global";

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: ${colors.darkBlue};
  h1 {
    margin: 0;
    font-size: 35px;
    font-weight: 500;
    margin-top: 2%;
  }
  @media only screen and (min-width: 760px) and (max-width: 1000px) {
    h1 {
      margin-top: 6%;
    }
  }
  @media only screen and (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-size: 25px;
      margin-top: 10%;
    }
    p {
      margin: 0;
    }
  } ;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 0.5px double ${colors.lightBlue};
`;

export const Space = styled.div`
  margin-top: 5%;
`;

export const MoodSection = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`;
