import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { useState } from "react";
import Button from "../../../shared/components/Button/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InvalidField } from "../../../shared/components/InvalidField/InvalidField";
import { BasicModal } from "../../../shared/components/Modal/Modal";
import { useHttpClient } from "../../../shared/hooks/httpHook";
import { config } from "../../../utils/config";
import { schema, fields } from "./RegisterForm.js";
import { useHistory } from "react-router-dom";

export const RegisterForm = ({ changeForm }) => {
  const { sendRequest } = useHttpClient();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const history = useHistory();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const closeModal = () => setModalVisible(false);

  const onSubmit = async (data) => {
    const url = `${config.userUrl}/register`;
    const response = await sendRequest(url, "POST", JSON.stringify(data), {
      "Content-Type": "application/json",
    });
    if (response.errors) {
      setModalVisible(true);
      setModalMessage(response.errors.user);
    } else {
      history.push("/");
    }
  };

  return (
    <div>
      <BasicModal
        text={modalMessage}
        closeModal={closeModal}
        modalActive={modalVisible}
      />
      {fields.map((field, index) => (
        <div key={index}>
          <TextField
            required
            id={field.name}
            name={field.name}
            label={field.label}
            variant="standard"
            type={
              field.name === "password" || field.name === "confirmPassword"
                ? "password"
                : field.name === "email"
                ? "email"
                : "text"
            }
            {...register(field.name)}
            error={errors[field.name] ? true : false}
            fullWidth
            margin="dense"
          />
          <InvalidField>{errors[field.name]?.message}</InvalidField>
        </div>
      ))}

      <FormControlLabel
        control={
          <Controller
            control={control}
            name="acceptTerms"
            defaultValue="false"
            inputRef={register()}
            render={({ field: { onChange } }) => (
              <Checkbox
                color="primary"
                onChange={(e) => onChange(e.target.checked)}
              />
            )}
          />
        }
        label={
          <Typography color={errors.acceptTerms ? "error" : "inherit"}>
            I have read and agree to the Terms *
          </Typography>
        }
      />
      <br />
      <InvalidField>{errors.acceptTerms?.message}</InvalidField>
      <br />
      <Grid container direction="row" justifyContent="space-between">
        <Button size="xsmall" onClick={changeForm} inverse>
          Change to login
        </Button>
        <Button onClick={handleSubmit(onSubmit)} size="xsmall">
          Register
        </Button>
      </Grid>
    </div>
  );
};
