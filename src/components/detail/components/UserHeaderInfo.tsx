interface Props {
    label: string;
    info: string;
}

export const UserHeaderInfo = ({ info, label }: Props) => {
    return (
        <li className="font-noto mr-8">
            <span className="font-bold">{info}</span> {label}
        </li>
    );
};
