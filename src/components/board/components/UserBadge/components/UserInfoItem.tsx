interface Props {
    label: string;
    info: string;
}

export const UserInfoItem = ({ info, label }: Props) => {
    return (
        <li className="text-center border-r border-gray-200 last:border-none p-4 font-noto">
            <h4 className="text-[0.9rem] font-semibold">{info}</h4>
            <span className="text-gray-500 text-[0.8rem] font-medium">{label}</span>
        </li>
    );
};
