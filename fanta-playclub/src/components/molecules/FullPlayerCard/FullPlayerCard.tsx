import { roleImageSetter } from "../../../utils/helper/roleImageSetter";
import { teamImageSetter } from "../../../utils/helper/teamImageSetter";
import "./styles.scss";
import Props from "./types";

const FullPlayerCard: React.FC<Props> = ({ player }) => {
    const image = "/images/voghera.jpg";

    return (
        <div className="player-card d-flex align-items-end justify-content-center">
            <div className="player-card_filled d-flex align-items-center flex-column my-1">
                <div className="team-image-contaier">
                    <img
                        src={teamImageSetter(player.team)}
                        alt="logo"
                        id="team-logo"
                    />
                </div>
                <span id="riot-id">{player.riotID}</span>
                <span id="fullname">{player.fullName}</span>
                <img
                    src={roleImageSetter(player.role)}
                    alt="role"
                    id="role-logo"
                />
            </div>
        </div>
    );
};

export default FullPlayerCard;
