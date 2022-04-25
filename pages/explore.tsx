import type { NextPage } from "next";
import Head from "next/head";
import { ExploreScreen } from "../src/pages/explore/ExploreScreen";

export const Explore: NextPage = () => {
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

            <ExploreScreen />
        </>
    );
};

export default Explore;
