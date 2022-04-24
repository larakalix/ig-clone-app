interface Props {
    label: string;
    info: string;
}

export const UserHeaderInfo = ({ info, label }: Props) => {
    return (
        <li className="font-noto mr-1 md:mr-8 text-[0.9rem] md:text-[1rem] text-gray-900 dark:text-white">
            <span className="font-bold">{info}</span> {label}
        </li>
    );
};
