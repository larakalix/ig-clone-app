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
        <div className="overflow-hidden mb-10 pl-0 break-inside saturate-100 hover:saturate-150 transition-all">
            <div className="rounded-md mb-4">
                <img src={image} alt={title} className="w-full rounded-2xl" />
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
