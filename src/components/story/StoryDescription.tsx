import Link from "next/link";
import { Size } from "../../models/Size";
import { Story } from "../../models/Stories";
import { UserCircle } from "../utils/user/UserCircle";
import { UserVerified } from "../utils/user/UserVerified";

export const StoryDescription = ({ story }: { story: Story }) => {
    const { title, description, image, user } = story;

    return (
        <div className="p-4 flex items-start flex-1">
            <Link href={`/p/${user.id}`}>
                <a>
                    <UserCircle
                        alt={user.id}
                        thumbnail={user.thumbnail}
                        type={Size.small}
                        className="w-[3.4rem] h-auto"
                    />
                </a>
            </Link>

            <div className="ml-4 mt-2 w-full font-noto">
                <span className="flex items-center font-bold text-item-black dark:text-gray-50">
                    {user.id} {user.isVerified && <UserVerified />}
                </span>
                <p className="flex items-center font-medium text-black dark:text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, culpa. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Cum, culpa. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Cum, culpa.
                </p>
            </div>
        </div>
    );
};
