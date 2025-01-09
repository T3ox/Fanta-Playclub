import Props from "./types";
const LeaderbordCol: React.FC<Props> = ({ title }) => {
    return (
        <>
            <div className="leaderboard-col">{title}</div>
        </>
    );
};

export default LeaderbordCol;
