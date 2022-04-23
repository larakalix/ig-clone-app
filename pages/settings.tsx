import type { NextPage } from "next";
import Head from "next/head";
import { SettingsScreen } from "../src/pages/settings/SettingsScreen";

const Settings: NextPage = () => {
    return (
        <>
            <Head>
                <title>IG Clone App</title>
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
