import { ReactNode } from "react";

export default interface Props {
    text: string;
    handle: () => void;
    className: string;
    children?: ReactNode;
    isActive: boolean;
}
