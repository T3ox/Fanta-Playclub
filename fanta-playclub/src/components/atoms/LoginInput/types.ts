export default interface Props {
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}