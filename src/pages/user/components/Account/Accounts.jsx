import { useContext, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { TextField, Paper, Box, Grid } from "@mui/material";
import Button from "../../../../shared/components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InvalidField } from "../../../../shared/components/InvalidField/InvalidField";
import { getDataFromToken } from "../../../../utils/getDataFromToken";
import * as Yup from "yup";
import { useHttpClient } from "../../../../shared/hooks/httpHook";
import { config } from "../../../../utils/config";

export const Account = (props) => {
  const authContext = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must not exceed 30 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters")
      .max(30, "Last name must not exceed 30 characters"),
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
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    getDataFromToken(setValue, authContext);
  }, [authContext, setValue]);

  const onSubmit = async (data) => {
    const {
      name,
      lastName,
      street,
      houseNumber,
      flatNumber,
      zipCode,
      city,
      country,
    } = data;
    const response = await sendRequest(
      `${config.userUrl}/update`,
      "POST",
      JSON.stringify({
        name,
        lastName,
        street,
        houseNumber,
        flatNumber,
        zipCode,
        city,
        country,
        userId: authContext.userData.id,
      }),
      {
        "Content-Type": "application/json",
      }
    );
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ margin: "auto 0" }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Paper>
          <Box px={2} py={1}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              variant="standard"
              type="text"
              {...register("name")}
              error={errors.name ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.name?.message}</InvalidField>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              variant="standard"
              type="text"
              {...register("lastName")}
              error={errors.lastName ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.lastName?.message}</InvalidField>
            <TextField
              required
              id="street"
              name="street"
              label="Street"
              variant="standard"
              type="text"
              {...register("street")}
              error={errors.street ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.street?.message}</InvalidField>
            <TextField
              required
              id="houseNumber"
              name="houseNumber"
              label="House Number"
              variant="standard"
              type="text"
              {...register("houseNumber")}
              error={errors.houseNumber ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.houseNumber?.message}</InvalidField>
            <TextField
              required
              id="flatNumber"
              name="flatNumber"
              label="Flat Number"
              variant="standard"
              type="text"
              {...register("flatNumber")}
              error={errors.flatNumber ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.flatNumber?.message}</InvalidField>
            <TextField
              required
              id="zipCode"
              name="zipCode"
              label="Zip Code"
              variant="standard"
              type="text"
              {...register("zipCode")}
              error={errors.zipCode ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.zipCode?.message}</InvalidField>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              variant="standard"
              type="text"
              {...register("city")}
              error={errors.city ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.city?.message}</InvalidField>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              variant="standard"
              type="text"
              {...register("country")}
              error={errors.country ? true : false}
              fullWidth
              margin="dense"
            />
            <InvalidField>{errors.country?.message}</InvalidField>
            <Button onClick={handleSubmit(onSubmit)} size="xsmall" center>
              Change your informations
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
