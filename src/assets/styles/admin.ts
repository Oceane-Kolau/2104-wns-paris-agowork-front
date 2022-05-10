import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card } from "@mui/material";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const CardAdmin = styled(Card)`
  max-width: 345px;
  text-align: center;
`;
