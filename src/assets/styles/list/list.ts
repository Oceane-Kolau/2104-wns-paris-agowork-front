import styled from "styled-components";

import { Box, Card, CardActions, IconButton } from "@mui/material";
import { colors } from "../global";

export const BrokenImage = styled.div`
  background-color: ${colors.mediumGrey};
  text-align: center;
  padding-top: 23%;
  height: 140px;
`;

export const CardList = styled(Card)`
  display: flex;
  max-height: 400px;
  margin: 0 1rem 1rem 0;
  flex-direction: column;
`;

export const BoxIcon = styled(Box)`
  display: inline-flex;
  vertical-align: middle;
  svg {
    width: 20px;
    color: ${colors.mediumBlue};
  }
`;

export const IconMood = styled.span`
  font-size: 30px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 2px 0 2px 0;
`;

export const FormTitle = styled.h2`
  font-size: 25px;
  margin: 1px 0 2px 0;
  font-weight: 600;
`;

export const LatestCreatedTitle = styled.h3`
  font-size: 22px;
  margin: 1px 0 30px 0;
  font-weight: 400;
`;

export const BtnDelete = styled(IconButton)`
  background: ${colors.trigradient};
  svg {
    width: 22px;
    color: white;
  }
`;

export const ActionsCard = styled(CardActions)`
  justify-content: flex-end;
  display: inline-flex;
  vertical-align: middle;
  margin-top: auto;
`;

export const MoodIcon = styled.span`
  font-size: 45px;
`;

export const IconParagraph = styled.span`
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin: 0.2rem;
  color: black;
`;

export const RoleTag = styled.div`
  border-radius: 2px;
  text-align: left;
  color: white;
  margin-right: 39%;
  font-size: 13px;
  margin-left: -2rem;
  font-weight: 600;
  padding: 2px;
  padding-left: 2rem;
  margin-top: -1.8rem;
  background: ${colors.trigradient};
  margin-bottom: 0.5rem;
`;

// 2.45 for exact up tag
