import React from "react";
import { MoodProfile } from "../../../assets/styles/dashboard/teamMood";

export default function TeamMood({ userMood }: any): JSX.Element {
  return <MoodProfile>{userMood.icon}</MoodProfile>;
}
