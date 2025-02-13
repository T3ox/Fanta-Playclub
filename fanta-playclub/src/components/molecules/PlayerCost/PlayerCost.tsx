import { teamImageSetter } from "../../../utils/helper/helper";
import CostBadge from "../../atoms/CostBadge/CostBadge";
import "./styles.scss";
import Props from "./types";

const PlayerCost: React.FC<Props> = ({ player }) => {
    return (
        <div className="team-image-contaier">
            <div className="cost-container">
                <CostBadge cost={player.cost} />
            </div>
            <img src={teamImageSetter(player.team)} alt="logo" id="team-logo" />
        </div>
    );
};

export default PlayerCost;
