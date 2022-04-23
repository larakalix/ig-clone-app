import { AiFillCheckCircle } from "react-icons/ai";
import { parseThousand } from "../../helpers/helpers";
import { UserCircle } from "../utils/user/UserCircle";
import { Size } from "../../models/Size";
import { User } from "../../models/Users";
import { UserHeaderInfo } from "./components/UserHeaderInfo";
import { UserVerified } from "../utils/user/UserVerified";

export const UserHeader = ({ user }: { user: User }) => {
    const { id, name, thumbnail, posts, followers, followed, isVerified } =
        user;

    return (
        <div className="flex flex-row items-center justify-center">
            <UserCircle alt={id} thumbnail={thumbnail} type={Size.xlarge} />
            <div className="ml-12">
                <h2 className="flex items-center text-[1rem] font-noto font-medium text-gray-900">
                    {id} {isVerified && <UserVerified />}
                </h2>
                <ul className="flex flex-row items-center justify-center max-w-full my-6">
                    <UserHeaderInfo info={parseThousand(posts)} label="posts" />
                    <UserHeaderInfo
                        info={parseThousand(followers)}
                        label="followers"
                    />
                    <UserHeaderInfo
                        info={parseThousand(followed)}
                        label="followed"
                    />
                </ul>
                <h1 className="text-[1.2rem] font-noto font-bold text-item-black">
                    {name}
                </h1>
                <p></p>
            </div>
        </div>
    );
};
