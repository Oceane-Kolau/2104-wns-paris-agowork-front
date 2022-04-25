import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  CardRow,
  Container,
  BgCalendar,
  Date,
} from "../../../assets/styles/course/elements";
import CourseModule, { CourseModuleProps } from "./courseModule";

export const ALL_MODULES = gql`
  query GetAllCourseModules {
    allCourseModules {
      id
      moduleTitle
      courses {
        id
        courseTitle
        comments
        isValidated
      }
    }
  }
`;

export type GetAllCourseModules = {
  allCourseModules: CourseModuleProps[];
};

function ModuleList(): JSX.Element {
  const { loading, error, data } = useQuery<GetAllCourseModules>(ALL_MODULES);
  if (loading)
    return (
      <Container>
        <CardRow>
          <p>Loading...</p>
        </CardRow>
      </Container>
    );
  if (error) return <p>Error :</p>;
  return (
    <Container>
      <Date>
        <BgCalendar>Lundi 27 avril 2021</BgCalendar>
      </Date>
      <CardRow data-testid="modules">
        {data?.allCourseModules.map((module: CourseModuleProps) => (
          <CourseModule
            id={module.id}
            key={module.id}
            moduleTitle={module.moduleTitle}
            courses={module.courses}
          />
        ))}
      </CardRow>
    </Container>
  );
}

export default ModuleList;
