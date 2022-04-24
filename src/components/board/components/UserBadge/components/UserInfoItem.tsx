import clsx from "clsx";

interface Props {
    label: string;
    info: string;
    borderless?: boolean;
    className?: string;
}

export const UserInfoItem = ({
    info,
    label,
    className = "",
    borderless = false,
}: Props) => {
    const styles = clsx({
        ["border-r border-gray-200 last:border-none"]: !borderless,
    });

    return (
        <li className={`text-center ${styles} p-4 font-noto ${className}`}>
            <h4 className="text-[0.9rem] font-semibold text-black dark:text-white">
                {info}
            </h4>
            <span className="text-gray-500 dark:text-gray-300 text-[0.8rem] font-medium">
                {label}
            </span>
        </li>
    );
};
