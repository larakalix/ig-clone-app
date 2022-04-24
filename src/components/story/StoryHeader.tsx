/* eslint-disable @next/next/no-img-element */
import { Story } from "../../models/Stories";

export const StoryHeader = ({ story }: { story: Story }) => {
    const { title, image } = story;

    return (
        <div className="overflow-hidden rounded-2xl w-full md:max-w-full lg:max-w-[30vw] xl::max-w-[40vw]">
            <img src={image} alt={title} className="w-full" />
        </div>
    );
};
