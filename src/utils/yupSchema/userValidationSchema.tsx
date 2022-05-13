import * as yup from "yup";

export const userCreationSchema = yup
  .object({
    firstname: yup.string().max(20).required(),
    lastname: yup.string().max(20).required(),
    town: yup.string().max(30).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(32)
      .test((value: any) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasUpperCase, hasLowerCase, hasNumber];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null,
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }),
  })
  .required();

  export const userUpdateSchema = yup
  .object({
    firstname: yup.string().max(20).required(),
    lastname: yup.string().max(20).required(),
    town: yup.string().max(30).required(),
    email: yup.string().email().required(),
  })
  .required();
