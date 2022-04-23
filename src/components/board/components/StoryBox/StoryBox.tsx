/* eslint-disable @next/next/no-img-element */
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import { parseThousand } from "../../../../helpers/helpers";
import { Size } from "../../../../models/Size";
import { Story } from "../../../../models/Stories";
import { UserCircle } from "../../../utils/user-circle/UserCircle";
import { StoryBoxInfo } from "./components/StoryBoxInfo";

export const StoryBox = ({ title, image, user, likes, comments }: Story) => {
    const { id, thumbnail } = user;

    return (
        <div className="overflow-hidden mb-10 pl-0 break-inside saturate-100 hover:saturate-150 transition-all group">
            <div className="rounded-2xl mb-4 relative overflow-hidden transition-opacity">
                <img src={image} alt={title} className="w-full rounded-2xl" />
                <ul className="flex items-center justify-center absolute w-full opacity-0 group-hover:opacity-100 top-[70%] bottom-0 left-0 right-0 bg-gradient-to-t from-pink to-transparent pt-20">
                    <StoryBoxInfo
                        value={parseThousand(likes)}
                        icon={FiHeart}
                        className="text-white"
                        noHover
                    />
                    <StoryBoxInfo
                        value={parseThousand(comments)}
                        icon={FiMessageCircle}
                        className="text-white"
                        noHover
                    />
                </ul>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center cursor-pointer">
                    <UserCircle
                        thumbnail={thumbnail}
                        alt={id}
                        type={Size.small}
                        className="w-[3.4rem] h-auto"
                    />
                    <span className="ml-4 font-noto font-bold first-letter:uppercase">
                        {id}
                    </span>
                </div>
                <div>
                    <ul className="flex items-center justify-center">
                        <StoryBoxInfo
                            value={parseThousand(likes)}
                            icon={FiHeart}
                        />
                        <StoryBoxInfo
                            value={parseThousand(comments)}
                            icon={FiMessageCircle}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};
