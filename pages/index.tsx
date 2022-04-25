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
                    content="I built this app just for personal practice reasons as part of my portfolio"
                />
                <meta name="image" content="/images/preview.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BoardScreen />
        </>
    );
};

export default Home;
