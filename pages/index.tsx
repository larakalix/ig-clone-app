import type { NextPage } from "next";
import Head from "next/head";
import { BoardScreen } from "../src/pages/board/BoardScreen";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Instagram Clone</title>

                <meta
                    property="og:url"
                    content="https://ig-clone-app.vercel.app/"
                />
                <meta property="og:title" content="Instagram Clone" />
                <meta
                    property="og:image"
                    content="https://ig-clone-app.vercel.app/images/preview.png"
                />
                <meta
                    property="og:description"
                    content="I built this app just for personal practice reasons as part of my portfolio."
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BoardScreen />
        </>
    );
};

export default Home;
