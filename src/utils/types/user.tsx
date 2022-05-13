import { CampusType } from "./campus";
import { MoodType } from "./mood";

export type UserType = {
  id?: string;
  firstname: string;
  lastname: string;
  town: string;
  email: string;
  role: string;
  password?: string;
  campus: CampusType;
  picture?: string;
  mood?: MoodType;
};

export type GetUsersType = {
  getAllUsers: UserType[];
};

export type Role = {
  name: string;
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
