import { StorieItems } from "../../../data/data";
import { Story } from "../../../models/Stories";
import { Heading } from "../../utils/heading/Heading";
import { StoryBox } from "./StoryBox/StoryBox";

export const Feed = () => {
    return (
        <div className="w-full mb-8">
            <Heading text="Feed" />

            <div className="masonry sm:masonry-sm md:masonry-md">
                {StorieItems.map(({ id, ...props }: Story) => (
                    <StoryBox key={id} id={id} {...props} />
                ))}
            </div>
        </div>
    );
};
