import FilterButton from "../../atoms/FilterButton/FilterButton";

const FiltersGroup = () => {
    return (
        <div className="d-flex justify-content-center w-100">
            <FilterButton title="League of Legends" />
            <FilterButton title="Valorant" />
            <FilterButton title="Totale" />
        </div>
    );
};

export default FiltersGroup;
