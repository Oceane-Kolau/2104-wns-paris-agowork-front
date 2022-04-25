import React from "react";
import {
  Question,
  Subtext,
  Arrow,
} from "../../../assets/styles/dashboard/chill";
import arrow from "../../../assets/pictures/Arrow-1.png";

export default function ChillCard(): JSX.Element {
  return (
    <>
      <Question>
        Besoin d&apos;un moment chill après les cours et de t&apos;amuser avec
        les gens de ta promo ?
      </Question>
      <Subtext>
        Découvre les jeux en ligne à la une
        <Arrow src={arrow} alt="icone" />
      </Subtext>
    </>
  );
}
