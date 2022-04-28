import ScootersCatalogList from "../../../scooters/components/ScootersCatalogList/ScootersCatalogList";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { useHttpClient } from "../../../../shared/hooks/httpHook";
import { config } from "../../../../utils/config";

export const Favourite = (props) => {
  const authContext = useContext(AuthContext);
  const [favourite, setFavourite] = useState([]);
  const { sendRequest, isLoading } = useHttpClient();
  useEffect(() => {
    const url = `${config.userUrl}/favourite?userId=${authContext.userData.id}`;
    const getFavourites = async () => {
      const response = await sendRequest(url);
      // setFavourite(response.favourite);
      console.log(favourite);
    };
    getFavourites();
  }, [authContext, sendRequest]);
  return <div>{<ScootersCatalogList scooters={favourite} />}</div>;
};
