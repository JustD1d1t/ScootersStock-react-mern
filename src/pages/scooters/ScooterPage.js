import { useParams } from "react-router-dom";
import ScooterItem from "./components/ScooterItem/ScooterItem";

import { DUMMY_SCOOTERS } from "./scooters";

const ScooterPage = (props) => {
  const scooterId = useParams().id;
  const scooter = DUMMY_SCOOTERS.filter(
    // za dużo operacji naraz - +rozumiem robi rzutowanie
    (scooter) => scooter.id === +scooterId
  )[0];
  return (
    <>
      <ScooterItem scooter={scooter} />
    </>
  );
};

export default ScooterPage;
