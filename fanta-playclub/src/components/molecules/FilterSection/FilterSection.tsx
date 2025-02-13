import "./styles.scss";
import Props from "./types";

const FilterSection: React.FC<Props> = ({ label, children }) => {
    return (
        <>
            <div className="filter-section my-3">
                <h3>{label}</h3>
                {children}
            </div>
        </>
    );
};

export default FilterSection;
