import React from "react";
import { useQuery } from "@apollo/client";
import { CardActions } from "@mui/material";
import { AddAlert } from "@mui/icons-material";
import {
  AlertHelp,
  CampusMoods,
  ContentCard,
  MoodAvatar,
  MoodName,
} from "../../../assets/styles/dashboard/teamMood";
import { GET_STUDENTS_SOCIAL } from "../../../graphql/queries/user/user";
import { ProfileAvatar } from "../../../assets/styles/sidebar/sidebar";
import TeamMood from "./teamMood";
import { GetUsersSocialType, UserSocialType } from "../../../utils/types/user";

export default function MoodBoard(): JSX.Element {
  const { data } = useQuery<GetUsersSocialType>(GET_STUDENTS_SOCIAL);
  return (
    <CampusMoods>
      {data?.getAllStudentsBySocial.map((classmate: UserSocialType) => (
        <ContentCard key={classmate.id}>
          {classmate.picture ? (
            <MoodAvatar src={classmate.picture} />
          ) : (
            <ProfileAvatar src="/broken-image.jpg" />
          )}
          <MoodName>
            {classmate.firstname} {classmate.lastname}
          </MoodName>
          <CardActions
            sx={{
              p: 0,
              justifyContent: "center",
              alignItems: "center",
              mt: "auto",
            }}
          >
            {classmate.mood && classmate.mood.icon ? (
              <TeamMood userMood={classmate.mood} />
            ) : (
              <></>
            )}
            {classmate.needHelp ? (
              <AlertHelp>
                <AddAlert />
              </AlertHelp>
            ) : (
              <></>
            )}
          </CardActions>
        </ContentCard>
      ))}
    </CampusMoods>
  );
}
