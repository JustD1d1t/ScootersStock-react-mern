import ScootersCatalogList from "./components/ScootersCatalogList/ScootersCatalogList";
import ScootersCatalogFilter from "./components/ScootersCatalogFilter/ScootersCatalogFilter";

import "./CatalogPage.scss";
const CatalogPage = () => {
  return (
    <section className="catalog">
      <ScootersCatalogFilter />
      <ScootersCatalogList />
    </section>
  );
};

export default CatalogPage;
