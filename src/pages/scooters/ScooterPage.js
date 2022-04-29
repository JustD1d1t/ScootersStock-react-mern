import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScooterItem from "./components/ScooterItem/ScooterItem";
import { useHttpClient } from "../../shared/hooks/httpHook";
import { config } from "../../utils/config";
import LoadingSpinner from "../../shared/components/LoadingSpinner/LoadingSpinner";

const ScooterPage = () => {
  const scooterId = useParams().id;
  const { sendRequest, isLoading } = useHttpClient();
  const [scooter, setScooter] = useState();

  useEffect(() => {
    const url = `${config.scootersUrl}/${scooterId}`;
    const getScooter = async () => {
      const response = await sendRequest(url);
      setScooter(response.scooter);
    };
    getScooter();
  }, [sendRequest, scooterId]);

  return <ScooterItem scooter={scooter} />;
};

export default ScooterPage;
