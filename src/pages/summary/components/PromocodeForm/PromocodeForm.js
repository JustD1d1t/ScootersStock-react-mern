import * as yup from "yup";

export const schema = yup.object().shape({
  promocode: yup
    .string()
    .matches(/promocode/, 'You have to type "promocode"')
    .max(9, 'You have to type "promocode"')
    .required(),
});
