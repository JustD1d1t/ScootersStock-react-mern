import ScootersCatalogList from "../../../scooters/components/ScootersCatalogList/ScootersCatalogList";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { DUMMY_SCOOTERS } from "../../../scooters/scooters";
export const Favourite = (props) => {
  const authContext = useContext(AuthContext);
  const [favourite, setFavourite] = useState([]);
  useEffect(() => {
    const user = authContext.userData;
    const favouriteIDs = user.favourite;
    const favouriteScooters = [];
    DUMMY_SCOOTERS.forEach((scooter) => {
      if (favouriteIDs.includes(scooter.id)) {
        favouriteScooters.push(scooter);
      }
    });
    setFavourite(favouriteScooters);
  }, [authContext]);
  return <div>{<ScootersCatalogList scooters={favourite} />}</div>;
};
