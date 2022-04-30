import styled from "styled-components";
import { Toolbar, Avatar, Typography, IconButton } from "@mui/material";
import { Drawer } from "./muiSidebar";
import { colors } from "../global";

export const Initial = styled.div`
  margin-top: -2rem;
`;

export const TopBar = styled(Toolbar)`
  background-color: white;
`;

export const ProfileAvatar = styled(Avatar)`
  background: -webkit-linear-gradient(
    to left,
    ${colors.lightBlue},
    ${colors.pink}
  );
  background: ${colors.trigradient};
`;

export const ColoredSvg = styled.div`
  svg,
  li {
    color: ${colors.darkGrey};
  }
  .avatar > div > svg {
    color: white;
  }
  a {
    text-decoration: none;
  }
  .active > li {
    color: white;
    background: ${colors.trigradient};
    svg {
      color: white;
    }
  }
`;

export const SideNav = styled(Drawer)`
  & > div {
    background-color: ${colors.mediumGrey};
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const CompanyName = styled(Typography)`
  margin-left: 3rem;
  color: black;
  font-size: 23px;
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const BurgerButton = styled(IconButton)`
  color: #000000;
  margin-left: -9px;
  @media only screen and (max-width: 830px) {
    margin-left: 0px;
  } ;
`;

export const nested = styled.li`
  padding-left: 3rem;
`;

export const Social = styled.div`
  right: 4rem;
  position: fixed;
`;

export const hide = styled.div`
  display: none;
`;
