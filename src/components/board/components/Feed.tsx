import Link from "next/link";
import { FeedItems } from "../../../data/data";
import { Story } from "../../../models/Stories";
import { Heading } from "../../utils/heading/Heading";
import { StoryBox } from "../../utils/feed/StoryBox";

export const Feed = () => {
    return (
        <div className="w-full mb-8">
            <Heading text="Feed" />

            <div className="masonry masonry-1 sm:md:masonry-1 lg:masonry-2 xl:masonry-3 2xl:masonry-4">
                {FeedItems.slice(0, 9).map(({ id, user, ...props }: Story) => (
                    <StoryBox
                        key={`board-story-${id}`}
                        id={id}
                        user={user}
                        {...props}
                    />
                ))}
            </div>
        </div>
    );
};
