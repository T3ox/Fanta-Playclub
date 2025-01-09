import Props from "./types";
const FilterButton: React.FC<Props> = ({ title }) => {
    return <button className="btn btn-outline-info">{title}</button>;
};

export default FilterButton;
