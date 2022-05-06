import { useState, useEffect } from "react";

import ScooterItem from "../ScooterItem/ScooterItem";
import { useHttpClient } from "../../../../shared/hooks/httpHook";
import { config } from "../../../../utils/config";

import "./ScootersList.scss";

const ScooterList = (props) => {
  const [scooters, setScooters] = useState([]);
  const { sendRequest, isLoading } = useHttpClient();

  useEffect(() => {
    const url = `${config.scootersUrl}?limit=3`;
    const getScooters = async () => {
      const response = await sendRequest(url);
      setScooters(response);
    };
    getScooters();
  }, [sendRequest]);

  const scootersDisplay = scooters.map((scooter) => (
    <ScooterItem
      key={scooter._id}
      name={scooter.name}
      img={scooter.color[0].url}
      description={scooter.description}
      id={scooter._id}
      isLoading={isLoading}
    />
  ));
  return <div className="scooters__container">{scootersDisplay}</div>;
  // return <div className="scooters__container">Test</div>;
};

export default ScooterList;
