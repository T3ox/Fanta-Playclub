import { useState } from "react";
import { useUser } from "../../../utils/context/User";
import { Player } from "../../../utils/LocalDB/userMock";
import Button from "../../atoms/Button/Button";
import EmptyPlayerCard from "../../molecules/EmptyPlayerCard/EmptyPlayerCard";
import FullPlayerCard from "../../molecules/FullPlayerCard/FullPlayerCard";
import TrueModal from "../TrueModal/TrueModal";
import "./styles.scss";

const TeamGroup = () => {
    const { selectedTeam, team, showPlayerModal, openModal, closeModal } = useUser();
    const [isValid, setIsValid] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    /*function isEmptyObject(player: Player) {
        return player.riotID !== "" && player.cost !== 0 ? false : true;
    }

    const emptyPlayerCard = (player: Player) => {
        return isEmptyObject(player) ? true : false;
    };*/

    const isEmptyObject = (player: Player) => {
        return player.riotID === "" || player.cost === 0;
    };

    const confirmTeam = () => {
        const validPlayers = team.filter((player) => !isEmptyObject(player));
        setIsValid(validPlayers.length === 5);
        setIsConfirmed(true);
    };

    const buttonClass = (): String => {
        if (isConfirmed && !isValid) return "btn btn-outline-danger button-confirm";

        return "btn btn-primary button-confirm";
    };

    return (
        <div className="team-group_container container d-flex align-items-center flex-column">
            <div className="team-group_wrapper container d-flex justify-content-around bg-black">
                {team.map((player, index) => (
                    <div
                        className="team-group_column d-flex align-items-center"
                        key={index}
                    >
                        <div className="team-group_player-card-container">
                            <div
                                className={`team-group_player-card-border ${selectedTeam === "LoL" ? "lol" : "valorant"}`}
                            >
                                {isEmptyObject(player) ? (
                                    <>
                                        <EmptyPlayerCard
                                            handleClick={() => openModal(index)}
                                        />
                                    </>
                                ) : (
                                    <FullPlayerCard player={player} index={index} />
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
            <div className="team-group_confirm-section d-flex align-items-center justify-content-between">
                <div className="team-group_button-confirm d-flex justify-content-end">
                    <Button
                        text="Conferma"
                        handle={confirmTeam}
                        className={`btn button-confirm ${isConfirmed && !isValid ? "btn-outline-danger" : "btn-primary"}`}
                        isActive={!(isConfirmed && !isValid)}
                    />
                </div>
                {isConfirmed && !isValid && (
                    <div className="error-mesage_container d-flex justify-content-start">
                        <span className="error-message">Il team non è completo</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamGroup;
