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
            <div className="overflow-hidden rounded-2xl w-full md:max-w-full lg:max-w-[30vw] xl::max-w-[40vw]">
                <img src={image} alt={title} />
            </div>
        </>
    );
};
