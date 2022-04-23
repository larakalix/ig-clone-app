import type { NextPage } from "next";
import Head from "next/head";
import { SettingsScreen } from "../src/pages/settings/SettingsScreen";

const Settings: NextPage = () => {
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

            <SettingsScreen />
        </>
    );
};

export default Settings;
