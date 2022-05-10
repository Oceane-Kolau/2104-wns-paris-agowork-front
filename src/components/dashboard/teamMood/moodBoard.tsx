import React from "react";
import { useQuery } from "@apollo/client";
import {
  CampusMoods,
  ContentCard,
  MoodAvatar,
  MoodName,
} from "../../../assets/styles/dashboard/teamMood";
import { GET_STUDENTS_MOOD } from "../../../graphql/queries/user/user";
import { ProfileAvatar } from "../../../assets/styles/sidebar/sidebar";
import TeamMood from "./teamMood";
import { GetUsersMoodType, UserMoodType } from "../../../types/mood";

export default function MoodBoard(): JSX.Element {
  const { data, error, loading } = useQuery<GetUsersMoodType>(GET_STUDENTS_MOOD);

  console.log(error)
  return (
    <CampusMoods>
      {data?.getAllStudentsByMood.map((user: UserMoodType) => (
        <ContentCard key={user.id}>
          {user.picture ? (
            <MoodAvatar src={user.picture} />
          ) : (
            <ProfileAvatar src="/broken-image.jpg" />
          )}
          <MoodName>
            {user.firstname} {user.lastname}
          </MoodName>
          {user.mood && user.mood.icon ? (
            <TeamMood userMood={user.mood} />
          ) : (
            <></>
          )}
        </ContentCard>
      ))}
    </CampusMoods>
  );
}
