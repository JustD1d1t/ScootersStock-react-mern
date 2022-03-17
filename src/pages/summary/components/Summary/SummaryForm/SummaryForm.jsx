import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, fields } from "./SummaryForm";
import Button from "../../../../../shared/components/Button/Button";
import styles from "../../../SummaryForm.module.scss";
import AuthContext from "../../../../../context/auth/authContext";
import { TextField } from "@mui/material";
import { InvalidField } from "../../../../../shared/components/InvalidField/InvalidField";
import { getDataFromToken } from "../../../../../utils/getDataFromToken";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cart";

const SummaryForm = ({ goToTheDelivery, goToTheTop }) => {
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    dispatch(cartActions.setAddress({ address: data }));
    goToTheDelivery();
    goToTheTop();
  };

  useEffect(() => {
    getDataFromToken(setValue, authContext);
  }, [authContext, setValue]);

  return (
    <>
      {fields.map((field) => (
        <>
          <TextField
            required
            id={field.name}
            name={field.name}
            label={field.label}
            variant="standard"
            type={
              field.name === "password"
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
        </>
      ))}
      <Button
        type="submit"
        size="small"
        classes={styles.summaryForm__submitButton}
        onClick={handleSubmit(submitForm)}
      >
        Go to the delivery
      </Button>
    </>
  );
};

export default SummaryForm;
