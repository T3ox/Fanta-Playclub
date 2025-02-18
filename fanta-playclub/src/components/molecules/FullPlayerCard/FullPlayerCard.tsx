import { useUser } from "../../../utils/context/User";
import {
    lolRoleImageSetter,
    valorantRoleImageSetter,
} from "../../../utils/helper/helper";
import { teamImageSetter } from "../../../utils/helper/helper";
import PlayerCost from "../PlayerCost/PlayerCost";
import "./styles.scss";
import Props from "./types";

const FullPlayerCard: React.FC<Props> = ({ player }) => {
    const { selectedTeam } = useUser();
    const imageSetter: string =
        selectedTeam === "LoL"
            ? lolRoleImageSetter(player.role)
            : valorantRoleImageSetter(player.role);

    const riotIDMinify = (riotID: string) => {
        const isSingleWord = !riotID.includes(" "); 

    if (!isSingleWord || riotID.length <= 14) {
        return (
            <div id="riot-id">
                <span>{riotID}</span>
            </div>
        );
    }

        const words = riotID.split("#");
        const lastWord = words.pop();
        const rest = words.join(" ");
        
        return (
            <div id="riot-id">
                <>
                    <span>{rest}</span>
                        <br/>
                    <span>#{lastWord}</span>
                </>
            </div>
        );
    }

    return (
        <div className="player-card d-flex align-items-end justify-content-center">
            <div className="player-card_filled d-flex align-items-center flex-column gap-4">
                <div className="player-card_team-image-container">
                    <PlayerCost player={player}>
                        <img src={teamImageSetter(player.team)} alt="logo" id="team-logo" />
                    </PlayerCost>
                </div>

                <div className="player-card_text-container text-center mb-2">
                    {riotIDMinify(player.riotID)}
                    {/*<br />*/}
                    <span id="team-name">{player.team}</span>
                </div>

                <>
                    <img src={imageSetter} alt="role" id="role-logo" />
                </>
                <div className="player-card_modify">
                    <button className="btn btn-outline-info"> Modifca </button>
                </div>
            </div>
        </div>
    );
};

export default FullPlayerCard;
