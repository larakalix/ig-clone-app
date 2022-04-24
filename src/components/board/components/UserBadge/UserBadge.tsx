import Link from "next/link";
import { parseThousand } from "../../../../helpers/helpers";
import { Size } from "../../../../models/Size";
import { User } from "../../../../models/Users";
import { UserCircle } from "../../../utils/user/UserCircle";
import { NotUser } from "./components/NotUser";
import { UserInfoItem } from "./components/UserInfoItem";

interface Props {
    user: User | undefined;
}

export const UserBadge = ({ user }: Props) => {
    const { id, name, thumbnail, posts, followers, followed } =
        user!;

    if (user === undefined) return <NotUser />;

    return (
        <div className="flex flex-col items-center justify-center">
            <Link href={`/p/${id}`}>
                <a>
                    <UserCircle
                        alt={id}
                        thumbnail={thumbnail}
                        type={Size.large}
                    />
                </a>
            </Link>

            <h1 className="font-noto font-bold mt-2 dark:text-white">{ name }</h1>
            <h2 className="text-gray-500 dark:text-gray-100 text-[0.8rem] font-noto font-medium">
                @{id}
            </h2>

            <ul className="flex flex-row items-center justify-center max-w-full my-6">
                <UserInfoItem info={parseThousand(posts)} label="Posts" />
                <UserInfoItem
                    info={parseThousand(followers)}
                    label="Followers"
                />
                <UserInfoItem info={parseThousand(followed)} label="Followed" />
            </ul>
        </div>
    );
};
