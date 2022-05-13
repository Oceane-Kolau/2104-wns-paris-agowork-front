import * as yup from "yup";

export const campusSchema = yup.object({
  name: yup.string().min(5).max(100).required(),
  phone: yup.string().max(10),
  address: yup.string().max(70),
}).required();
