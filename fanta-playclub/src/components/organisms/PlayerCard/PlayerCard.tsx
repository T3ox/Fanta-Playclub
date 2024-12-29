import { useUser } from "../../../utils/context/User";
import { userMock } from "../../../utils/LocalDB/userMock";
import "./styles.scss";
const PlayerCard = () => {
    const { selectedTeam } = useUser();

    function isEmptyObject(obj: object) {
        return Object.keys(obj).length === 0;
    }

    userMock.players.valorant.length === 0 ||
    userMock.players.valorant.every(isEmptyObject)
        ? console.log("vuoto")
        : console.log("non è vuoto");

    return (
        <div
            className="custom-col"
            style={{ flex: "1 1 20%", margin: "0 10px" }}
        >
            <div className="player-card_container">
                <div
                    className={`player-card_border ${selectedTeam === "LoL" ? "lol" : "valorant"}`}
                >
                    <div className="player-card">
                        <button className="btn-icon">
                            <i className="fa-regular fa-circle-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
