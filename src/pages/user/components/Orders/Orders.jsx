import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { Order } from "../Order/Order";

export const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const authContext = useContext(AuthContext);
  useEffect(() => {}, [authContext]);
  return (
    <div>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};
