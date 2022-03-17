import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { DUMMY_SCOOTERS } from "../../../scooters/scooters";
import { Order } from "../Order/Order";

export const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    // const user = JSON.parse(authContext.userData);
    // const userOrders = user.orders;
    // const orders = [];
    // userOrders.forEach((order) => {
    //   const scooters = [];
    //   const orderedScooters = order.scooters;
    //   orderedScooters.forEach((orderedScooter) => {
    //     const scooter = DUMMY_SCOOTERS.find(
    //       (scooter) => scooter.id === orderedScooter.scooterId
    //     );
    //     scooters.push({ scooter, amount: orderedScooter.amount });
    //   });
    //   orders.push({
    //     id: order.id,
    //     scooters,
    //   });
    // });
    // setOrders(orders);
  }, [authContext]);
  return (
    <div>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};
