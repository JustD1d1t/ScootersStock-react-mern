import { Select, FormControl, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  onChange,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            label={label}
            labelId={label}
            value={defaultValue}
            onChange={onChange}
            {...field}
          >
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
