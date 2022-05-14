import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
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
import { CardTitle } from "../../../assets/styles/list/list";
import { AuthContext } from "../../../utils/context/authContext";
import { CardActions, Container, IconButton } from "@mui/material";
import { AddAlert } from "@mui/icons-material";

export default function MoodBoard(): JSX.Element {
  const { user } = useContext(AuthContext);
  const { data } = useQuery<GetUsersSocialType>(GET_STUDENTS_SOCIAL);

  if (!user?.campus) {
    return <CardTitle>👉 Vous n'avez pas encore de Campus attribué</CardTitle>;
  }

  return (
    <Container>
      <h1>Campus de {user?.campus}</h1>
      <CampusMoods>
        {data?.getAllStudentsBySocial.map((user: UserSocialType) => (
          <ContentCard key={user.id}>
            {user.picture ? (
              <MoodAvatar src={user.picture} />
            ) : (
              <ProfileAvatar src="/broken-image.jpg" />
            )}
            <MoodName>
              {user.firstname} {user.lastname}
            </MoodName>
            <CardActions
              sx={{
                p: 0,
                justifyContent: "center",
                alignItems: "center",
                mt: "auto",
              }}
            >
              {user.mood && user.mood.icon ? (
                <TeamMood userMood={user.mood} />
              ) : (
                <></>
              )}
              {user.needHelp ? (
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
    </Container>
  );
}
