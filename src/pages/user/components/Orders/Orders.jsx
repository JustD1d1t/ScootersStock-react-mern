import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { Order } from "../Order/Order";
import { useHttpClient } from "../../../../shared/hooks/httpHook";
import { config } from "../../../../utils/config";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner/LoadingSpinner";

export const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const authContext = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();

  useEffect(() => {
    const url = `${config.orderUrl}?userId=${authContext.userData.id}`;
    const getOrders = async () => {
      const response = await sendRequest(url);
      setOrders(response);
    };
    getOrders();
  }, [authContext, sendRequest]);

  orders.map((order) => console.log(order));

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {orders.map((order) => (
            <Order key={order._id} order={order} />
          ))}
        </div>
      )}
    </>
  );
};
