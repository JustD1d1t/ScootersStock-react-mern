import { Paper, Box, Grid } from "@mui/material";
import styles from "./Order.module.scss";
export const Order = ({ order }) => {
  const { id, scooters } = order;
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ margin: "auto 0" }}
    >
      <Grid item xs={12}>
        <Paper>
          <Box px={2} py={2}>
            <p className={styles.order__number}>Order no: {id}</p>
            {scooters.map((item) => (
              <div key={item.scooter.id} className={styles.order__item}>
                <div className={styles.order__image}>
                  <img src={item.scooter.image} alt="" />
                </div>
                <div className={styles.order__itemDetails}>
                  <p className={styles.order__title}>{item.scooter.name}</p>
                  <p className={styles.order__amount}>Amount: {item.amount}</p>
                  <p className={styles.order__totalPrice}>
                    Total price: {item.scooter.price * item.amount}
                  </p>
                </div>
              </div>
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
