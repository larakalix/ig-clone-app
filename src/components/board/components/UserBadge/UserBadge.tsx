import { useEffect, useState } from "react";
import { Users } from "../../../../data/data";
import { parseThousand } from "../../../../helpers/helpers";
import { Size } from "../../../../models/Size";
import { User } from "../../../../models/Users";
import { UserCircle } from "../../../utils/user-circle/UserCircle";
import { NotUser } from "./components/NotUser";
import { UserInfoItem } from "./components/UserInfoItem";

export const UserBadge = () => {
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        setUser(Users[0]);
    }, []);

    if (user === undefined) return <NotUser />;

    return (
        <div className="flex flex-col items-center justify-center">
            <UserCircle
                alt={user.id}
                thumbnail={user.thumbnail}
                type={Size.large}
            />

            <h2 className="text-gray-500 mt-2 text-[0.8rem]">@{user.id}</h2>

            <ul className="flex flex-row items-center justify-center max-w-full my-6">
                <UserInfoItem info={parseThousand(user.posts)} label="Posts" />
                <UserInfoItem
                    info={parseThousand(user.followers)}
                    label="Followers"
                />
                <UserInfoItem
                    info={parseThousand(user.followed)}
                    label="Followed"
                />
            </ul>
        </div>
    );
};
