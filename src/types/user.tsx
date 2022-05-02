import { CampusType } from "./campus";
import { MoodType } from "./mood";

export type UserType = {
  id?: string;
  firstname: string;
  lastname: string;
  town: string;
  picture: string;
  email: string;
  role: string;
  mood: MoodType;
  campus: CampusType;
};

export type GetUsersType = {
  getAllUsers: UserType[];
};

export type UserCreationValues = {
  firstname: string;
  lastname: string;
  town: string;
  password: string;
  email: string;
  role: string;
  campus: string;
};

export const roles = [
  {
    name: "STUDENT",
  },
  {
    name: "TEACHER",
  },
  {
    name: "ADMIN",
  },
];
