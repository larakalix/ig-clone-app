/* eslint-disable @next/next/no-img-element */
import { Story } from "../../models/Stories";

export const StoryHeader = ({ story }: { story: Story }) => {
    const { title, image } = story;

    return (
        <div className="overflow-hidden rounded-2xl">
            <img src={image} alt={title} />
        </div>
    );
};
