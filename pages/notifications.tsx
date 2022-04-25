import type { NextPage } from "next";
import Head from "next/head";
import { NotificationsScreen } from "../src/pages/notifications/NotificationsScreen";

export const Motifications: NextPage = () => {
    return (
        <>
            <Head>
                <title>Settings - Instagram Clone</title>
                <meta
                    name="description"
                    content="This app is just for portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NotificationsScreen />
        </>
    );
};

export default Motifications;
