import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import { SearchScreen } from "../../src/pages/search/SearchScreen";

const Search: NextPage = () => {
    const { query, isReady } = useRouter();

    if (!isReady) return null;

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

            <SearchScreen keyword={query?.keyword as string} />
        </>
    );
};

export default Search;
