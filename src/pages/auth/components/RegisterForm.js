import * as Yup from "yup";
export const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is required")
    .min(6, "Email must be at least 6 characters")
    .max(20, "Email must not exceed 20 characters"),
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must not exceed 30 characters"),
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must not exceed 30 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(30, "Last name must not exceed 30 characters"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only digits")
    .min(7, "House number must be at least 7 characters")
    .max(9, "House number must not exceed 9 characters"),
  street: Yup.string()
    .required("Street is required")
    .min(3, "Street must be at least 3 characters")
    .max(30, "Street must not exceed 30 characters"),
  houseNumber: Yup.string()
    .required("House number is required")
    .matches(/^[0-9]+$/, "Only digits")
    .min(1, "House number must be at least 1 characters")
    .max(3, "House number must not exceed 3 characters"),
  flatNumber: Yup.string()
    .required("Flat number is required")
    .matches(/^[0-9]+$/, "Only digits")
    .min(1, "Flat number must be at least 1 characters")
    .max(3, "Flat number must not exceed 3 characters"),
  zipCode: Yup.string()
    .required("Zip code is required")
    .matches(/^[0-9]+$/, "Only digits")
    .min(3, "Zip code must be at least 3 characters")
    .max(6, "Zip code must not exceed 6 characters"),
  city: Yup.string()
    .required("City is required")
    .min(3, "City must be at least 3 characters")
    .max(30, "City must not exceed 30 characters"),
  country: Yup.string()
    .required("Country is required")
    .min(3, "Country must be at least 3 characters")
    .max(30, "Country must not exceed 30 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "You have to type same password")
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
    name: "username",
    label: "Username",
  },
  {
    name: "name",
    label: "Name",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
  },
  {
    name: "street",
    label: "Street",
  },
  {
    name: "houseNumber",
    label: "House Number",
  },
  {
    name: "flatNumber",
    label: "Flat Number",
  },
  {
    name: "zipCode",
    label: "Zip Code",
  },
  {
    name: "city",
    label: "City",
  },
  {
    name: "country",
    label: "Country",
  },
  {
    name: "password",
    label: "Password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
  },
];
