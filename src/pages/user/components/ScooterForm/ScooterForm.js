import * as Yup from "yup";
export const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must not exceed 30 characters"),
  price: Yup.string()
    .required("Price is required")
    .matches(/^[1-9][0-9][0-9][0-9]$/, "Price must be between 1000 and 9999")
    .min(1, "Price must be at least 1 characters")
    .max(4, "Price must not exceed 4 characters"),
  colorFirstName: Yup.string().required("Color name is required"),
  colorSecondName: Yup.string(),
  colorFirstUrl: Yup.string()
    .required("Color url is required")
    .matches(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
      "Image must be a link"
    ),
  colorSecondUrl: Yup.string(),
  manufacturer: Yup.string()
    .required("Manufacturer is required")
    .min(3, "Manufacturer must be at least 3 characters")
    .max(30, "Manufacturer must not exceed 30 characters"),
  country: Yup.string()
    .required("Country is required")
    .min(3, "Country must be at least 3 characters")
    .max(30, "Country must not exceed 30 characters"),
  powerType: Yup.string()
    .required("Manufacturer is required")
    .min(3, "Manufacturer must be at least 3 characters")
    .max(30, "Manufacturer must not exceed 30 characters"),
  engineCapacity: Yup.string()
    .required("Engince capacity is required")
    .matches(/^[0-9]+$/, "Only digits")
    .min(1, "Engince capacity must be at least 1 characters")
    .max(3, "Engince capacity must not exceed 3 characters"),
  wheelSize: Yup.string()
    .required("Wheel size is required")
    .matches(/^[1][0-2]$/, "Wheel size must be between 10 and 12")
    .min(1, "Wheel size must be at least 1 characters")
    .max(3, "Wheel size must not exceed 3 characters"),
  seats: Yup.string()
    .required("Seats is required")
    .matches(/^[1-2]$/, "Seats must be 1 or 2")
    .max(1, "Seats must not exceed 1 character"),
  description: Yup.string()
    .required("Description is required")
    .min(30, "Description must be at least 30 characters")
    .max(150, "Description must not exceed 150 characters"),
  topSpeed: Yup.string()
    .required("Top speed is required")
    .matches(
      /^[3-9][0-9]|^[1][0-4][0-9]$/,
      "Top speed must be between 30 and 149"
    )
    .min(1, "Top speed must be at least 1 characters")
    .max(3, "Top speed must not exceed 3 characters"),
});
