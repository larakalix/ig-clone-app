interface Props {
    label: string;
    info: number;
}

export const UserInfoItem = ({ info, label }: Props) => {
    return (
        <li className="text-center border-r border-gray-300 last:border-none p-4">
            <h4 className="text-[0.9rem] font-bold">{info}</h4>
            <span className="text-gray-500 text-[0.8rem]">{label}</span>
        </li>
    );
};
