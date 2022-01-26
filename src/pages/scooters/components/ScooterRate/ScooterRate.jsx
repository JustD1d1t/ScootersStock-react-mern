import SVGComponentStar from "../../../../shared/components/svgComponents/SVGComponentStar";

const ScooterRate = (props) => {
  return (
    <div className="scooters__rate">
      <SVGComponentStar />
      <SVGComponentStar />
      <SVGComponentStar />
      <SVGComponentStar />
      <SVGComponentStar />
      <span className="scooters__rate-votes">({props.rate})</span>
    </div>
  );
};

export default ScooterRate;
