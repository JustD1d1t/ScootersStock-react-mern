import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "At least 3 characters")
    .max(25, "Maximum 25 characters")
    .required(),
  lastName: yup
    .string()
    .min(3, "At least 3 characters")
    .max(25, "Maximum 25 characters")
    .required(),
  street: yup
    .string()
    .min(3, "At least 3 characters")
    .max(25, "Maximum 25 characters")
    .required(),
  houseNumber: yup
    .string()
    .required("You have to type number")
    .min(1, "You have to type positive number")
    .max(999, "You have to type number lower than 999")
    .matches(/^[0-9]+$/, "Must be only digits"),
  flatNumber: yup
    .string()
    .required("You have to type number")
    .min(1, "You have to type positive number")
    .max(9, "You have to type number lower than 999")
    .matches(/^[0-9]+$/, "Must be only digits"),
  zipCode: yup
    .string()
    .required("You have to type zip code")
    .min(3, "At least 3 characters")
    .max(6, "Maximum 6 characters")
    .matches(/^[0-9]+$/, "Must be only digits"),
  city: yup
    .string()
    .min(3, "At least 3 characters")
    .max(25, "Maximum 25 characters")
    .required(),
  country: yup
    .string()
    .min(3, "At least 3 characters")
    .max(25, "Maximum 25 characters")
    .required(),
  email: yup
    .string()
    .email("You have to type correct e-mail")
    .min(3, "At least 3 characters")
    .max(25, "Maximum 25 characters")
    .required(),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("You have to type phone number")
    .min(8, "At least 8 characters")
    .max(10, "Maximum 10 characters"),
});
