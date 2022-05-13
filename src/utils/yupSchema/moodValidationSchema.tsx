import * as yup from "yup";

export const moodSchema = yup
  .object({
    name: yup.string().min(1).max(40).required(),
    icon: yup.string().max(10).required(),
  })
  .required();
