import styled from "styled-components";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import AccordionSummary from "@mui/material/AccordionSummary";
import { colors } from "../global";

export const Container = styled.div`
  width: 80%;
  margin-left: 13%;
  margin-right: 10%;
  padding-top: 7%;
`;

export const Date = styled.span`
  font-size: 25px;
  color: ${colors.darkBlue};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardRow = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.article`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
    inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(55, 84, 170, 0.15),
    -7px -7px 20px rgba(255, 255, 255, 1),
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 3rem;
  h3,
  h4 {
    color: ${colors.darkBlue};
    font-size: 25px;
    text-align: left;
    padding-left: 20px;
  }
`;

export const ModuleWrapper = styled.div`
  h2 {
    font-size: 30px;
    text-align: left;
    margin-top: 55px;
  }
`;

export const RadioButtons = styled.div`
  font-size: 20px;
  color: black;
  padding-right: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Achievment = styled.label`
  display: flex;
  flex-wrap: wrap;
`;

export const InputAchievment = styled(Radio)`
  display: flex;
  flex-wrap: wrap;
`;

export const InputComments = styled(TextareaAutosize)`
  min-width: 100%;
  height: 150px;
`;

export const StyledButton = styled(Button)`
  && {
    margin: 10px;
    margin-left: 42%;
    border-radius: 10px;
  }
  &: hover {
    color: black;
    border 1px solid ${colors.darkBlue};
    background-color: transparent;
  }
`;

export const AccordionComments = styled(AccordionSummary)`
  MuiButtonBase-root
    MuiIconButton-root
    MuiAccordionSummary-expandIcon
    MuiIconButton-edgeEnd {
    margin-top: 100px;
  }
`;

export const AchievmentStatus = styled.div`
  font-size: 22px;
  text-align: left;
  padding-left: 20px;
  border: 1 px solid red;
`;

export const CourseTitle = styled.span`
  font-size: 35px;
  color: ${colors.darkBlue};
`;

export const Message = styled.span`
  font-size: 20px;
  background-color: #e0e8f7;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  border-radius: 10px;
`;

export const BgCalendar = styled.span`
  background-color: #e0e8f7;
  padding: 20px;
  border-radius: 10px;
  margin-right: 1.5rem;
`;
