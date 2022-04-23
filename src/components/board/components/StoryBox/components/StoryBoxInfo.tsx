import { IconType } from "react-icons";

interface Props {
    value: string;
    icon: IconType;
}

export const StoryBoxInfo = ({ value, icon: Icon }: Props) => {
    return (
        <li className="flex items-center justify-center mr-4 last:mr-0 font-noto text-item-black hover:text-pink transition-colors cursor-pointer">
            <Icon className="mr-2 text-[1.2rem]" />
            <span className="text-[0.8rem] font-semibold">{value}</span>
        </li>
    );
};
