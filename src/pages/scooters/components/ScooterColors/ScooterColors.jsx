const ScooterColors = (props) => {
  return (
    <div className="scooters__colors">
      {props.colors.map((color, id) => (
        <div
          key={id}
          className="scooters__color"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ScooterColors;
