/* eslint-disable @next/next/no-img-element */
import { Story } from "../../models/Stories";
import { Logo } from "../layout/Navbar/components/Logo";

export const StoryHeader = ({ story }: { story: Story }) => {
    const { title, image } = story;

    return (
        <>
            <div className="flex md:hidden">
                <Logo />
            </div>
            <div className="overflow-hidden rounded-2xl">
                <img src={image} alt={title} />
            </div>
        </>
    );
};
