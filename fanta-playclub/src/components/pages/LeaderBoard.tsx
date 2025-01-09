import FiltersGroup from "../molecules/FiltersGroup/FiltersGroup";
import LeaderBoardTable from "../organism/LeaderBoardTable/LeaderBoardTable";

const LeaderBoard = () => {
    return (
        <div className="bg-black">
            <h1>HOME</h1>
            <FiltersGroup />
            <div className="container">
                <LeaderBoardTable />
            </div>
        </div>
    );
};

export default LeaderBoard;
