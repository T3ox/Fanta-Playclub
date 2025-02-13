export default interface Props {
    show: boolean;
    handleClick: () => void;
    links: { url: string; displayName: string }[];
}
