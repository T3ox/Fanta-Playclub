import { useUser } from "../../../utils/context/User";
import { Player } from "../../../utils/LocalDB/userMock";
import EmptyPlayerCard from "../../molecules/EmptyPlayerCard/EmptyPlayerCard";
import FullPlayerCard from "../../molecules/FullPlayerCard/FullPlayerCard";
import TrueModal from "../TrueModal/TrueModal";
import "./styles.scss";

const TeamGroup = () => {
    const {
        selectedTeam,
        team,
        showPlayerModal,
        openModal,
        closeModal,
        addPlayerShowModal,
    } = useUser();

    function isEmptyObject(player: Player) {
        return player.riotID !== "" && player.cost != 0 ? false : true;
    }

    const emptyPlayerCard = (player: Player) => {
        return isEmptyObject(player) ? true : false;
    };

    return (
        <div
            className="team-group container d-flex justify-content-around bg-black"
            style={{ maxWidth: "80%" }}
        >
            {team.map((player, index) => (
                <div className="custom-col" key={index}>
                    <div className="player-card_container">
                        <div
                            className={`player-card_border ${selectedTeam === "LoL" ? "lol" : "valorant"}`}
                        >
                            {emptyPlayerCard(player) ? (
                                <>
                                    {index}
                                    <EmptyPlayerCard
                                        handleClick={() => openModal(index)}
                                    />
                                </>
                            ) : (
                                <FullPlayerCard player={player} />
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {showPlayerModal ? (
                <TrueModal handleClick={closeModal} showModal={showPlayerModal} />
            ) : null}
            {showPlayerModal && <div className="overlay-background"></div>}
        </div>
    );
};

export default TeamGroup;
