import type { NextPage } from "next";
import Head from "next/head";
import { BoardScreen } from "../src/pages/board/BoardScreen";

const Home: NextPage = () => {
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

            <BoardScreen />
        </>
    );
};

export default Home;
