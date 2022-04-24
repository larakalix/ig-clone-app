/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import { parseThousand } from "../../../helpers/helpers";
import { Size } from "../../../models/Size";
import { Story } from "../../../models/Stories";
import { UserCircle } from "../user/UserCircle";
import { StoryBoxInfo } from "./components/StoryBoxInfo";

export const StoryBox = ({
    id: storyId,
    title,
    image,
    user,
    likes,
    comments,
}: Story) => {
    const { id, thumbnail } = user;

    return (
        <div className="overflow-hidden mb-10 pl-0 break-inside saturate-100 hover:saturate-150 transition-all group">
            <div className="rounded-2xl mb-4 relative overflow-hidden transition-opacity">
                <Link key={`board-story-${storyId}`} href={`/f/${storyId}`}>
                    <a>
                        <img
                            src={image}
                            alt={title}
                            className="w-full rounded-2xl"
                        />

                        <ul className="flex items-center justify-center absolute w-full opacity-0 group-hover:opacity-100 top-[12rem] bottom-0 left-0 right-0 bg-gradient-to-t from-pink to-transparent pt-20">
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
                    </a>
                </Link>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-between">
                <Link key={`story-user-${id}`} href={`/p/${user.id}`}>
                    <a className="flex items-center justify-center cursor-pointer mb-3 md:mb-0">
                        <UserCircle
                            thumbnail={thumbnail}
                            alt={id}
                            type={Size.small}
                            className="w-[3.4rem] h-auto"
                        />
                        <span className="ml-4 font-noto font-bold first-letter:uppercase text-item-black dark:text-gray-50">
                            {id}
                        </span>
                    </a>
                </Link>
                <ul className="flex items-center justify-center">
                    <StoryBoxInfo value={parseThousand(likes)} icon={FiHeart} />
                    <StoryBoxInfo
                        value={parseThousand(comments)}
                        icon={FiMessageCircle}
                    />
                </ul>
            </div>
        </div>
    );
};
