import styled from "styled-components";
import { Box, Radio, Typography } from "@mui/material";
import { colors, shapes } from "../global";

export const Card = styled(Box)`
  background: ${colors.trigradient};
  display: flex;
  justify-content: center;
  min-width: 22%;
  flex-wrap: wrap;
  margin-left: 2rem;
  border-radius: ${shapes.borderRadiusSmall};
`;

export const ContentCard = styled(Box)`
  background: white;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  border-radius: ${shapes.borderRadiusMed};
`;

export const FormGroup = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5%;
  justify-content: space-around;
`;

export const TitleMood = styled(Typography)`
  font-size: 19px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`;

export const IconMood = styled.img`
  width: 65px;
`;

export const MoodInput = styled(Radio)`
  height: 2em;
  .Mui-checked {
    color: ${colors.darkBlue};
  }
  input[type="radio"]:focus {
    outline: none;
  }
`;
