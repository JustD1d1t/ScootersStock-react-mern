import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is required")
    .min(6, "Email must be at least 6 characters")
    .max(20, "Email must not exceed 20 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
});

export const fields = [
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
  },
];
