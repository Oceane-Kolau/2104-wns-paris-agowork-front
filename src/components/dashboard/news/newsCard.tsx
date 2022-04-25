import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { News } from "../../../assets/styles/dashboard/news";
import { Hr } from "../../../assets/styles/dashboard/dashboard";

const news = [
  {
    id: 1,
    title: "Les travaux de l'amphi n°2 bientôt terminé",
    subtitle:
      "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
    photo: "https://i.postimg.cc/mkSxVcYF/dom-fou-YRMWVcdyhm-I-unsplash.jpg",
  },
  {
    id: 2,
    title: "Ne tardez pas l'ouverture aux formations Erasmus débute le 20 Mars",
    subtitle:
      "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
    photo:
      "https://i.postimg.cc/3x1kjVGt/capturing-the-human-heart-Trh-LCn1ab-MU-unsplash.jpg",
  },
  {
    id: 3,
    title: "Remise des diplômes le 10 Juin",
    subtitle:
      "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
    photo:
      "https://i.postimg.cc/RVQh9ygv/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg",
  },
];
export default function NewsCard(): JSX.Element {
  return (
    <News>
      {news.map((u) => {
        return (
          <div key={u.id}>
            <div className="card">
              <img src={u.photo} alt={u.title} />
              <p>
                {u.title}
                <br />

                {u.subtitle}
                <span>
                  Lire l&apos;article <ArrowRightAltIcon className="arrow" />
                </span>
              </p>
            </div>
            {u.id <= 2 && <Hr />}
          </div>
        );
      })}
    </News>
  );
}
