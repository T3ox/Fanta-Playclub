import CostBadge from "../../atoms/CostBadge/CostBadge";
import "./styles.scss";
import Props from "./types";

const PlayerCost: React.FC<Props> = ({ player, children }) => {
    return (
        <div className="team-image-contaier">
            <div className="cost-container">
                <CostBadge cost={player.cost} />
            </div>
            {children}
        </div>
    );
};

export default PlayerCost;
