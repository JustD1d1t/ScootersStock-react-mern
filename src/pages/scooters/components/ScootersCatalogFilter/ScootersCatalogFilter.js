import "./ScootersCatalogFilter.scss";
import SVGComponentArrowDown from "../../../../shared/components/svgComponents/SVGComponentArrowDown";

const DUMMY_FILTERS = [
  {
    header: "Manufacturer",
    categories: [
      "Forte",
      "Honda",
      "Moto Tech",
      "Mustang",
      "Spark",
      "Suzuki",
      "Viper",
      "Yiben",
      "Yamaha",
    ],
  },
  {
    header: "Country",
    categories: ["Japan", "China"],
  },
  {
    header: "Power Type",
    categories: ["Petrol", "Electric"],
  },
  {
    header: "Engine Capacity",
    categories: ["50cm3", "80cm3", "100cm3", "125cm3", "150cm3"],
  },
  {
    header: "Wheel size",
    categories: ["10 inches", "12 inches"],
  },
  {
    header: "Seat available",
    categories: ["1 person", "2 person"],
  },
];

const ScootersCatalogFilter = (props) => {
  const openFilterGroup = (event) => {
    event.target.nextElementSibling.classList.toggle("open");
  };

  const openFiltersContainer = (event) => {
    event.stopPropagation();
    event.target.nextElementSibling.classList.toggle("open");
  };

  const filterScooters = (event) => {
    const filter = event.target;
    props.filterScooters(filter.dataset.group, filter.name);
  };

  const filters = DUMMY_FILTERS.map((filter, id) => {
    return (
      <div key={id}>
        <p className="catalog__filter-header" onClick={openFilterGroup}>
          {filter.header} <SVGComponentArrowDown />
        </p>
        <div className="catalog__filters-group">
          {filter.categories.map((category, id) => (
            <label
              key={id}
              htmlFor={category}
              className="catalog__filter-category"
            >
              {category}
              <input
                type="checkbox"
                id={category}
                name={category}
                data-group={filter.header}
                onChange={filterScooters}
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
      </div>
    );
  });
  return (
    <div className="catalog__filters">
      <p className="catalog__filters-header" onClick={openFiltersContainer}>
        Filters
        <SVGComponentArrowDown />
      </p>
      <div className="catalog__filters-container">{filters}</div>
    </div>
  );
};

export default ScootersCatalogFilter;
