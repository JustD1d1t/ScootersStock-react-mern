import { useContext, useState } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { TextField, MenuItem, Paper, Box, Grid } from "@mui/material";
import Button from "../../../../shared/components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InvalidField } from "../../../../shared/components/InvalidField/InvalidField";
import { ReactHookFormSelect } from "../../../../shared/components/ReactHookFormSelect/ReactHookFormSelect";
import { useHttpClient } from "../../../../shared/hooks/httpHook";
import { config } from "../../../../utils/config";
import { schema } from "./ScooterForm";
import { BasicModal } from "../../../../shared/components/Modal/Modal";

export const ScooterForm = (props) => {
  const authContext = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [manufacturer, setManufacturer] = useState("");
  const [powerType, setPowerType] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [seats, setSeats] = useState("");
  const [country, setCountry] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const changeManufacturer = (event) => {
    setManufacturer(event.target.value);
  };

  const changePowerType = (event) => {
    setPowerType(event.target.value);
  };
  const changeEngineCapacity = (event) => {
    setEngineCapacity(event.target.value);
  };
  const changeWheelSize = (event) => {
    setWheelSize(event.target.value);
  };
  const changeSeats = (event) => {
    setSeats(event.target.value);
  };
  const changeCountry = (event) => {
    setCountry(event.target.value);
  };
  const closeModal = () => setModalVisible(false);

  const onSubmit = async (data) => {
    const url = `${config.scootersUrl}/add`;
    const response = await sendRequest(url, "POST", JSON.stringify(data), {
      "Content-Type": "application/json",
    });
    if (response.message) {
      setModalVisible(true);
      setModalMessage(response.message);
    } else if (response.errors) {
      setModalVisible(true);
      setModalMessage(response.errors);
    }
  };

  return (
    <>
      <BasicModal
        text={modalMessage}
        closeModal={closeModal}
        modalActive={modalVisible}
      />
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
                id="price"
                name="price"
                label="Price"
                variant="standard"
                type="number"
                inputProps={{
                  inputMode: "numeric",
                  min: 1000,
                  max: 9999,
                }}
                {...register("price")}
                error={errors.price ? true : false}
                fullWidth
                margin="dense"
              />
              <InvalidField>{errors.price?.message}</InvalidField>
              <ReactHookFormSelect
                id="manufacturer"
                name="manufacturer"
                label="Manufacturer"
                defaultValue={manufacturer}
                onChange={changeManufacturer}
                control={control}
                sx={{ mt: 1 }}
                fullWidth
              >
                <MenuItem value={"Forte"}>Forte</MenuItem>
                <MenuItem value={"Honda"}>Honda</MenuItem>
                <MenuItem value={"motoTech"}>Moto Tech</MenuItem>
                <MenuItem value={"Mustang"}>Mustang</MenuItem>
                <MenuItem value={"Spark"}>Spark</MenuItem>
                <MenuItem value={"Suzuki"}>Suzuki</MenuItem>
                <MenuItem value={"Viper"}>Viper</MenuItem>
                <MenuItem value={"Yiben"}>Yiben</MenuItem>
                <MenuItem value={"Yamaha"}>Yamaha</MenuItem>
              </ReactHookFormSelect>
              <InvalidField>{errors.manufacturer?.message}</InvalidField>
              <ReactHookFormSelect
                id="country"
                name="country"
                label="Country"
                defaultValue={country}
                onChange={changeCountry}
                control={control}
                sx={{ mt: 1 }}
                fullWidth
              >
                <MenuItem value={"Japan"}>Japan</MenuItem>
                <MenuItem value={"China"}>China</MenuItem>
              </ReactHookFormSelect>
              <InvalidField>{errors.country?.message}</InvalidField>
              <Grid
                container
                direction="row"
                sx={{ margin: "auto 0" }}
                justifyContent="space-between"
              >
                <Grid item xs={12} sm={8} md={5}>
                  <TextField
                    required
                    id="colorFirstName"
                    name="colorFirstName"
                    label="First variant color"
                    variant="standard"
                    type="text"
                    {...register("colorFirstName")}
                    error={errors.colorFirstName ? true : false}
                    fullWidth
                    margin="dense"
                  />
                  <InvalidField>{errors.colorFirstName?.message}</InvalidField>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                  <TextField
                    required
                    id="colorFirstUrl"
                    name="colorFirstUrl"
                    label="First variant url"
                    variant="standard"
                    type="text"
                    {...register("colorFirstUrl")}
                    error={errors.colorFirstUrl ? true : false}
                    fullWidth
                    margin="dense"
                  />
                  <InvalidField>{errors.colorFirstUrl?.message}</InvalidField>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                sx={{ margin: "auto 0" }}
              >
                <Grid item xs={12} sm={8} md={5}>
                  <TextField
                    id="colorSecondName"
                    name="colorSecondName"
                    label="Second variant color"
                    variant="standard"
                    type="text"
                    {...register("colorSecondName")}
                    error={errors.colorSecondName ? true : false}
                    fullWidth
                    margin="dense"
                  />
                  <InvalidField>{errors.colorSecondName?.message}</InvalidField>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                  <TextField
                    id="colorSecondUrl"
                    name="colorSecondUrl"
                    label="Second variant url"
                    variant="standard"
                    type="text"
                    {...register("colorSecondUrl")}
                    error={errors.colorSecondUrl ? true : false}
                    fullWidth
                    margin="dense"
                  />
                  <InvalidField>{errors.colorSecondUrl?.message}</InvalidField>
                </Grid>
              </Grid>
              {/* <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="powerType">Power Type</InputLabel>
              <Select
                labelId="powerType"
                label="powerType"
                value={powerType}
                onChange={changePowerType}
                {...register("powerType")}
              >
                <MenuItem value={"Electric"}>Electric</MenuItem>
                <MenuItem value={"Petrol"}>Petrol</MenuItem>
              </Select>
            </FormControl> */}
              <ReactHookFormSelect
                id="powerType"
                name="powerType"
                label="Power Type"
                defaultValue={powerType}
                onChange={changePowerType}
                control={control}
                sx={{ mt: 1 }}
                fullWidth
                register={{ ...register("powerType") }}
              >
                <MenuItem value={"Electric"}>Electric</MenuItem>
                <MenuItem value={"Petrol"}>Petrol</MenuItem>
              </ReactHookFormSelect>
              <InvalidField>{errors.powerType?.message}</InvalidField>
              {/* <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="engineCapacity">Engine Capacity</InputLabel>
              <Select
                labelId="engineCapacity"
                label="engineCapacity"
                value={engineCapacity}
                onChange={changeEngineCapacity}
                {...register("engineCapacity")}
              >
                <MenuItem value={"50"}>50</MenuItem>
                <MenuItem value={"75"}>75</MenuItem>
                <MenuItem value={"125"}>125</MenuItem>
                <MenuItem value={"150"}>150</MenuItem>
              </Select>
            </FormControl> */}
              <ReactHookFormSelect
                id="engineCapacity"
                name="engineCapacity"
                label="Engine Capacity"
                defaultValue={engineCapacity}
                onChange={changeEngineCapacity}
                control={control}
                sx={{ mt: 1 }}
                fullWidth
              >
                <MenuItem value={"50"}>50</MenuItem>
                <MenuItem value={"75"}>75</MenuItem>
                <MenuItem value={"125"}>125</MenuItem>
                <MenuItem value={"150"}>150</MenuItem>
              </ReactHookFormSelect>
              <InvalidField>{errors.engineCapacity?.message}</InvalidField>
              {/* <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="wheelSize">Wheel Size</InputLabel>
              <Select
                labelId="wheelSize"
                label="wheelSize"
                value={wheelSize}
                onChange={changeWheelSize}
                {...register("wheelSize")}
              >
                <MenuItem value={"10"}>10</MenuItem>
                <MenuItem value={"12"}>12</MenuItem>
              </Select>
            </FormControl> */}
              <ReactHookFormSelect
                id="wheelSize"
                name="wheelSize"
                label="Wheel Size"
                defaultValue={wheelSize}
                onChange={changeWheelSize}
                control={control}
                sx={{ mt: 1 }}
                fullWidth
              >
                <MenuItem value={"10"}>10</MenuItem>
                <MenuItem value={"12"}>12</MenuItem>
              </ReactHookFormSelect>
              <InvalidField>{errors.wheelSize?.message}</InvalidField>
              {/* <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="seats">Seats</InputLabel>
              <Select
                labelId="seats"
                label="seats"
                value={seats}
                onChange={changeSeats}
                {...register("seats")}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
              </Select>
            </FormControl> */}
              <ReactHookFormSelect
                id="seats`"
                name="seats"
                label="Seats"
                defaultValue={seats}
                onChange={changeSeats}
                control={control}
                sx={{ mt: 1 }}
                fullWidth
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
              </ReactHookFormSelect>
              <InvalidField>{errors.seats?.message}</InvalidField>
              <TextField
                required
                id="topSpeed"
                name="topSpeed"
                label="Top Speed"
                variant="standard"
                type="number"
                inputProps={{
                  inputMode: "numeric",
                  min: 30,
                  max: 149,
                }}
                {...register("topSpeed")}
                error={errors.topSpeed ? true : false}
                fullWidth
                margin="dense"
              />
              <InvalidField>{errors.topSpeed?.message}</InvalidField>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                variant="standard"
                type="text"
                {...register("description")}
                error={errors.description ? true : false}
                fullWidth
                margin="dense"
                multiline
                rows={4}
              />
              <InvalidField>{errors.description?.message}</InvalidField>
              <Button onClick={handleSubmit(onSubmit)} size="xsmall" center>
                Add scooter
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
