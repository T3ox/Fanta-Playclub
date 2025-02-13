import { useUser } from "../../../utils/context/User";
import {
    lolRoleImageSetter,
    valorantRoleImageSetter,
} from "../../../utils/helper/helper";
import PlayerCost from "../PlayerCost/PlayerCost";
import "./styles.scss";
import Props from "./types";

const FullPlayerCard: React.FC<Props> = ({ player }) => {
    const { selectedTeam } = useUser();

    const imageSetter: string =
        selectedTeam === "LoL"
            ? lolRoleImageSetter(player.role)
            : valorantRoleImageSetter(player.role);

    return (
        <div className="player-card d-flex align-items-end justify-content-center">
            <div className="player-card_filled d-flex align-items-center flex-column gap-4">
                <PlayerCost player={player} />

                <div className="player-card_text-container text-center mb-2">
                    <span id="riot-id">{player.riotID}</span>
                    <br />
                    <span id="team-name">{player.team}</span>
                </div>

                <img src={imageSetter} alt="role" id="role-logo" />

                <button className="btn btn-outline-info modify-player"> Modifca </button>
            </div>
        </div>
    );
};

export default FullPlayerCard;
