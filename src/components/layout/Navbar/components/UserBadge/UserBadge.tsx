import Image from "next/image";
import { useEffect, useState } from "react";
import { Users } from "../../../../../data/data";
import { User } from "../../../../../models/Users";
import { UserInfoItem } from "./components/UserInfoItem";

export const UserBadge = () => {
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        setUser(Users[0]);
    }, []);

    if (user === undefined)
        return (
            <div>
                <h1>No user logged</h1>
            </div>
        );

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="rounded-full border-2 border-pink flex items-center justify-center p-2">
                <Image
                    src={user.thumbnail}
                    alt={user.id}
                    width="80"
                    height="80"
                    className="rounded-full"
                />
            </div>

            <h2 className="text-gray-500 mt-2 text-[0.8rem]">@{user.id}</h2>

            <ul className="flex flex-row items-center justify-center max-w-full my-6">
                <UserInfoItem info={user.posts} label="Posts" />
                <UserInfoItem info={user.followers} label="Followers" />
                <UserInfoItem info={user.followed} label="Followed" />
            </ul>
        </div>
    );
};
