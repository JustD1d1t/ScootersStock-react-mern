import "./ScootersCatalogFilter.scss";
import SVGComponentArrowDown from "../../../../shared/components/svgComponents/SVGComponentArrowDown";
import { useForm } from "react-hook-form";
import Button from "../../../../shared/components/Button/Button";
import { createSearchParamsString } from "../../../../utils/createSearchParamsString";

const DUMMY_FILTERS = [
  {
    header: {
      display: "Manufacturer",
      value: "manufacturer",
    },
    categories: [
      {
        display: "Forte",
        value: "Forte",
      },
      {
        display: "Honda",
        value: "Honda",
      },
      {
        display: "Moto Tech",
        value: "Moto_Tech",
      },
      {
        display: "Mustang",
        value: "Mustang",
      },
      {
        display: "Spark",
        value: "Spark",
      },
      {
        display: "Suzuki",
        value: "Suzuki",
      },
      {
        display: "Viper",
        value: "Viper",
      },
      {
        display: "Yiben",
        value: "Yiben",
      },
      {
        display: "Yamaha",
        value: "Yamaha",
      },
    ],
  },
  {
    header: {
      display: "Country",
      value: "country",
    },
    categories: [
      {
        display: "Japan",
        value: "Japan",
      },
      {
        display: "China",
        value: "China",
      },
    ],
  },
  {
    header: {
      display: "Power Type",
      value: "powerType",
    },
    categories: [
      {
        display: "Petrol",
        value: "Petrol",
      },
      {
        display: "Electric",
        value: "Electric",
      },
    ],
  },
  {
    header: {
      display: "Engine Capacity",
      value: "engineCapacity",
    },
    categories: [
      {
        display: "50cm3",
        value: "50",
      },
      {
        display: "80cm3",
        value: "80",
      },
      {
        display: "100cm3",
        value: "100c",
      },
      {
        display: "125cm3",
        value: "125",
      },
      {
        display: "150cm3",
        value: "150",
      },
    ],
  },
  {
    header: {
      display: "Wheel Size",
      value: "wheelSize",
    },
    categories: [
      {
        display: "10 inches",
        value: "10",
      },
      {
        display: "12 inches",
        value: "12",
      },
    ],
  },
  {
    header: {
      display: "Seat Available",
      value: "seats",
    },
    categories: [
      {
        display: "1 person",
        value: "1",
      },
      {
        display: "2 person",
        value: "2",
      },
    ],
  },
];

const ScootersCatalogFilter = (props) => {
  const { register, handleSubmit } = useForm();
  const openFilterGroup = (event) => {
    event.target.nextElementSibling.classList.toggle("open");
  };

  const openFiltersContainer = (event) => {
    event.stopPropagation();
    event.target.nextElementSibling.classList.toggle("open");
  };

  const filterScooters = (name, group) => {
    props.filterScooters(name, group);
  };
  const onSubmit = (data) => {
    filterScooters(createSearchParamsString(data));
  };

  const filters = DUMMY_FILTERS.map((filter, id) => {
    return (
      <div key={id}>
        <p className="catalog__filter-header" onClick={openFilterGroup}>
          {filter.header.display} <SVGComponentArrowDown />
        </p>
        <div className="catalog__filters-group">
          {filter.categories.map((category, id) => (
            <label
              key={id}
              htmlFor={category.display}
              className="catalog__filter-category"
            >
              {category.display}
              <input
                type="checkbox"
                id={category.display}
                value={category.value}
                name={filter.header.value}
                {...register(filter.header.value)}
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
      <form
        className="catalog__filters-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        {filters}
        <Button type="submit" size="xsmall">
          Filter
        </Button>
      </form>
    </div>
  );
};

export default ScootersCatalogFilter;
