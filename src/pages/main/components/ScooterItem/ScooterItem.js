import React from "react";
import "./ScooterItem.scss";

import Button from "../../../../shared/components/Button/Button";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner/LoadingSpinner";

const ScooterItem = (props) => {
  return (
    <>
      <div className="scooter__item">
        {props.isLoading ? (
          <LoadingSpinner asOverlay />
        ) : (
          <>
            <div className="scooter__image">
              <img src={props.img} alt="" />
            </div>
            <div className="scooter__details">
              <div>
                <p className="scooter__name">{props.name}</p>
                <p className="scooter__description">{props.description}</p>
              </div>
              <Button
                inverse
                size="small"
                type="button"
                to={`/scooters/${props.id}`}
              >
                Learn more
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ScooterItem;
