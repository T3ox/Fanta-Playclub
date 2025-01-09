import LeaderbordCol from "../../atoms/LeaderbordCol/LeaderbordCol";
import "./styles.scss";
const LeaderboardRow = () => {
    const header = ["Nickname", "League of Legends", "Valorant", "Totali"];
    return (
        <div className="leaderboard-row d-flex">
            {header.map((title) => (
                <LeaderbordCol title={title} />
            ))}
        </div>
    );
};

export default LeaderboardRow;
