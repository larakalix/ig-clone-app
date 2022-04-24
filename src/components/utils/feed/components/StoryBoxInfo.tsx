import clsx from "clsx";
import { IconType } from "react-icons";

interface Props {
    value: string;
    icon: IconType;
    noHover?: boolean;
    className?: string;
}

export const StoryBoxInfo = ({
    value,
    icon: Icon,
    className = "",
    noHover = false,
}: Props) => {
    const styles = clsx({
        ["hover:text-pink dark:hover:text-pink"]: !noHover,
    });

    return (
        <li
            className={`flex items-center justify-center mr-4 last:mr-0 font-noto text-item-black dark:text-gray-50 transition-colors cursor-pointer ${styles} ${className}`}
        >
            <Icon className="mr-2 text-[1.2rem]" />
            <span className="text-[0.8rem] font-semibold">{value}</span>
        </li>
    );
};
