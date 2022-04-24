import { FiCamera } from "react-icons/fi";
import { Size } from "../../models/Size";
import { Story } from "../../models/Stories";
import { StoryBox } from "../utils/feed/StoryBox";
import { Heading } from "../utils/heading/Heading";

interface Props {
    feeds: Story[];
}

export const UserFeeds = ({ feeds }: Props) => {
    if (feeds.length === 0) {
        return (
            <div className="h-80vh w-full flex items-center justify-center flex-col">
                <FiCamera />
                <h1 className="font-noto text-[1.2rem] font-semibold">
                    There are no posts yet
                </h1>
            </div>
        );
    }

    return (
        <div className="w-full mt-8">
            <Heading text="Feeds" type={Size.large} />
            
            <div className="masonry masonry-2 sm:md:masonry-2 lg:masonry-2 xl:masonry-4 2xl:masonry-4 max-w-full">
                {feeds.map(({ id, user, ...props }: Story) => (
                    <StoryBox
                        id={id}
                        key={`${user.id}-h${id}`}
                        user={user}
                        {...props}
                    />
                ))}
            </div>
        </div>
    );
};
