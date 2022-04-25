import type { NextPage } from "next";
import Head from "next/head";
import { MessagesScreen } from "../src/pages/messages/MessagesScreen";

export const Messages: NextPage = () => {
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

            <MessagesScreen />
        </>
    );
};

export default Messages;
