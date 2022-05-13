import * as yup from "yup";

export const ressourceSchema = yup
  .object({
    title: yup.string().min(5).max(100).required(),
    link: yup.string().required(),
    description: yup.string().max(200),
  })
  .required();
