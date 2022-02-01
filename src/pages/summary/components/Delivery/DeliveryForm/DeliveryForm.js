import * as yup from "yup";

export const schema = yup.object().shape({
  delivery: yup
    .string("Choose delivery method, please.")
    .required("Choose delivery method, please."),
});
