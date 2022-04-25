import React from "react";
import News from "../../components/dashboard/news/news";
import Chill from "../../components/dashboard/chill/chill";
import {
  Title,
  Hr,
  Space,
  MoodSection,
} from "../../assets/styles/dashboard/dashboard";
import MoodBoard from "../../components/dashboard/teamMood/moodBoard";
import MoodCard from "../../components/dashboard/mood/moodDashboard";

export default function Dashboard(): JSX.Element {
  return (
    <>
      <MoodSection>
        <MoodBoard />
        <MoodCard />
      </MoodSection>
      <Space />
      <Title>
        <h1>News du campus</h1>
        <p>Voir tous les articles</p>
      </Title>
      <Hr />
      <News />
      <Space />
      <Title>
        <h1>Détente</h1>
        <p>Voir tous les jeux</p>
      </Title>
      <Hr />
      <Chill />
      <Hr />
    </>
  );
}
