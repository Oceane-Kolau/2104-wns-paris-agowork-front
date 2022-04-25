import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Accordion from "@mui/material/Accordion";
import EditIcon from "@mui/icons-material/Edit";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  Card,
  Achievment,
  InputAchievment,
  RadioButtons,
  InputComments,
  StyledButton,
  AccordionComments,
  Message,
  CourseTitle,
  AchievmentStatus,
} from "../../../assets/styles/course/elements";

import { Form } from "../../../assets/styles/form";
import { FormElements } from "../../../assets/styles/global";

export type CourseProps = {
  id?: string;
  courseTitle: string;
  isValidated: string;
  comments: string;
  subCourse?: unknown;
};

export const UPDATE_ISVALIDATED = gql`
  mutation updateIsValidated($input: CourseInput) {
    updateIsValidated(input: $input) {
      id
      isValidated
      comments
    }
  }
`;

function Course({
  id,
  courseTitle,
  comments,
  isValidated,
}: CourseProps): JSX.Element {
  const [achievment, setAchievment] = useState("");
  const [newComments, setNewComments] = useState("");
  const [updateIsValidated, { data }] = useMutation(UPDATE_ISVALIDATED);
  let message = null;
  if (data && data.updateIsValidated) {
    message = data.updateIsValidated.isValidated;
    if (achievment === "TRUE") {
      message = "Terminé & assimilé ✔️";
    }
    if (achievment === "FALSE") {
      message = "Pas acquis ❌";
    }
    if (achievment === "INPROGRESS") {
      message = "In progress 🔄";
    }
  }
  return (
    <Card>
      <CourseTitle>{courseTitle}</CourseTitle>
      <AchievmentStatus>
        {isValidated === "TRUE" ? <p> Terminé & assimilé ✔️ </p> : null}
        {isValidated === "FALSE" ? <p> Pas acquis ❌ </p> : null}
        {isValidated === "INPROGRESS" ? <p> In progress 🔄 </p> : null}
      </AchievmentStatus>
      <Message>
        {message ? (
          <p data-testid="change-msg">Ce cours est passé en status {message}</p>
        ) : null}
      </Message>
      <Form
        data-testid="form"
        onSubmit={async (e) => {
          e.preventDefault();
          updateIsValidated({
            variables: {
              input: {
                id,
                isValidated: achievment,
                comments: newComments,
              },
            },
          });
        }}
      >
        <FormElements>
          <RadioButtons>
            <Achievment>Terminé & assimilé ✔️</Achievment>
            <InputAchievment
              name="achievment"
              value="TRUE"
              checked={achievment === "TRUE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>Pas acquis ❌ </Achievment>
            <InputAchievment
              name="achievment"
              value="FALSE"
              checked={achievment === "FALSE"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
          <RadioButtons>
            <Achievment>In progress 🔄</Achievment>
            <InputAchievment
              name="achievment"
              value="INPROGRESS"
              checked={achievment === "INPROGRESS"}
              onChange={(e) => setAchievment(e.target.value)}
            />
          </RadioButtons>
        </FormElements>
        <Accordion elevation={0}>
          <AccordionComments
            expandIcon={<EditIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {comments ? (
              <p>{comments}</p>
            ) : (
              <p>Ajoutez des notes sur ce cours</p>
            )}
          </AccordionComments>
          <AccordionDetails>
            <InputComments
              name="newComments"
              value={newComments}
              onChange={(e) => setNewComments(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <StyledButton type="submit" data-testid="submit-btn">
          Mettre à jour
        </StyledButton>
      </Form>
    </Card>
  );
}

export default Course;
