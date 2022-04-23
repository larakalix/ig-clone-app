import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import { User } from "../../src/models/Users";
import { Users } from "../../src/data/data";
import { DetailScreen } from "../../src/pages/detail/DetailScreen";

const Profile: NextPage = () => {
    const [user, setUser] = useState<User | undefined>(undefined);
    const { query, isReady } = useRouter();

    useEffect(() => {
        if (isReady) {
            const { id } = query;
            setUser(Users.find((user) => user.id === id));
        }
    }, [isReady, query]);

    return (
        <>
            <Head>
                <title>Instagram Clone</title>
                <meta
                    name="description"
                    content="This app is just for personal portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DetailScreen user={user} />
        </>
    );
};

export default Profile;
