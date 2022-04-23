import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import { FeedItems } from "../../src/data/data";
import { Story } from "../../src/models/Stories";
import { PostScreen } from "../../src/pages/post/PostScreen";

const Post: NextPage = () => {
    const [story, setStory] = useState<Story | undefined>(undefined);
    const { query, isReady } = useRouter();

    useEffect(() => {
        if (isReady) {
            console.log(query);
            const { id } = query;
            setStory(FeedItems.find((story) => story.id === id));
        }
    }, [isReady, query]);

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

            <PostScreen story={story} />
        </>
    );
};

export default Post;
