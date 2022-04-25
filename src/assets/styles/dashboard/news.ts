import styled from "styled-components";
import { shapes } from "../global";

export const News = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  div.card {
    display: flex;
    margin-top: 3%;
  }
  p {
    display: flex;
    padding-left: 3%;
    margin: 0;
    font-size: 25px;
    justify-content: space-between;
    flex-direction: column;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: light;
  }
  img {
    width: 288px;
    height: 203px;
    border-radius: ${shapes.borderRadiusMed};
  }
  hr {
    margin-top: 3%;
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
    div.card {
      display: flex;
      flex-direction: column;
    }
    p {
      font-size: 22px;
      padding: 0;
    }
    span {
      font-size: 17px;
    }
    img {
      width: 250px;
      height: 155px;
    }
  } ;
`;
