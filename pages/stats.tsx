import type { NextPage } from "next";
import Head from "next/head";
import { StatsScreen } from "../src/pages/stats/StatsScreen";

export const Stats: NextPage = () => {
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

            <StatsScreen />
        </>
    );
};

export default Stats;
