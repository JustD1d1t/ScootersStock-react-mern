import * as yup from "yup";

export const schema = yup.object().shape({
  payment: yup
    .string("Choose payment method, please.")
    .required("Choose payment method, please."),
});
