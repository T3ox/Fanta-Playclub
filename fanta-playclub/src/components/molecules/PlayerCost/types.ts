import { ReactNode } from "react";
import { Player } from "../../../utils/LocalDB/userMock";

export default interface Props {
    player: Player;
    children: ReactNode;
}
