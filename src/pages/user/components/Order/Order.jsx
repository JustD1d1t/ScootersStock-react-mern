import { Paper, Box, Grid } from "@mui/material";
import styles from "./Order.module.scss";

export const Order = ({ order }) => {
  return (
    <Grid container justifyContent="center" sx={{ margin: "auto 0" }}>
      <Grid item xs={12}>
        <Paper>
          <Box px={2} py={2} m={1}>
            <p className={styles.order__number}>Order no: {order._id}</p>
            <Grid container my={1}>
              <Grid item xs={3}>
                <p className={styles.order__orderSectionTitle}>Address</p>
                <Grid item my={1}>
                  <p>Name: {order.address.name}</p>
                </Grid>
                <Grid item my={1}>
                  <p>Last name: {order.address.lastName}</p>
                </Grid>
                <Grid item my={1}>
                  <p>Email: {order.address.email}</p>
                </Grid>
                <Grid item my={1}>
                  <p>Phone number: {order.address.phoneNumber}</p>
                </Grid>
                <Grid item my={1}>
                  <p>Country: {order.address.country}</p>
                </Grid>
                <Grid item my={1}>
                  <p>City: {order.address.city}</p>
                </Grid>
                <Grid item my={1}>
                  <p>Zip code: {order.address.zipCode}</p>
                </Grid>
                <Grid item my={1}>
                  <p>Street: {order.address.street}</p>
                </Grid>
                <Grid item my={1}>
                  <p>House number: {order.address.houseNumber}</p>
                </Grid>
                <Grid item my={1}>
                  <p>Flat number: {order.address.flatNumber}</p>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <p className={styles.order__orderSectionTitle}>
                  Ordered scooters
                </p>
                {order.items.map((item) => {
                  return (
                    <Grid container key={item._id}>
                      <Grid item xs={8}>
                        <Grid container my={1}>
                          <Grid item xs={6}>
                            <p>Scooter: {item.title}</p>
                          </Grid>
                          <Grid item xs={6}>
                            <p>Color: {item.color}</p>
                          </Grid>
                        </Grid>
                        <Grid container my={1}>
                          <Grid item xs={6}>
                            <p>Quantity: {item.quantity}</p>
                          </Grid>
                          <Grid item xs={6}>
                            <p>Price: {item.price}</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          xs={12}
                          my={1}
                          justifyContent="flex-end"
                        >
                          <Grid item xs={6}>
                            <p>Total price: {item.totalPrice}</p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <div className={styles.order__scooterImage}>
                          <img src={item.image} alt="" />
                        </div>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid container>
                <Grid item xs={12} my={1}>
                  <p className={styles.order__orderSectionTitle}>Details</p>
                </Grid>
                <Grid item xs={4} my={1}>
                  <p>Delivery method: {order.deliveryMethod}</p>
                </Grid>
                <Grid item xs={4} my={1}>
                  <p>Payment method: {order.paymentMethod}</p>
                </Grid>
                <Grid item xs={4} my={1}>
                  <p>Total price: {order.totalPriceForAll}</p>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
