import type { NextPage } from "next";
import Head from "next/head";
import { ErrorScreen } from "../src/pages/error/ErrorScreen";

const Error: NextPage = () => {
    return (
        <>
            <Head>
                <title>Page not found</title>
                <meta
                    name="description"
                    content="This app is just for personal portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ErrorScreen />
        </>
    );
};

export default Error;
