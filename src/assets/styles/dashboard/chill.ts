import styled from "styled-components";

export const Question = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    text-align: start;
  } ;
`;

export const Subtext = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 3%;
    margin-bottom: 7%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 17px;
    text-align: start;
    align-items: flex-start;
  } ;
`;

export const Arrow = styled.img`
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 50%;
  } ;
`;
