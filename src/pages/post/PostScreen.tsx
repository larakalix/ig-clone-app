import { PageWrapper } from "../../components/layout/PageWrapper/PageWrapper";
import { StoryDescription, StoryHeader } from "../../components/story";
import { NoFoundData } from "../../components/utils/no-found-data/NoFoundData";
import { Story } from "../../models/Stories";

export const PostScreen = ({ story }: { story: Story | undefined }) => {
    if (!story) return <NoFoundData text="User story found" />;

    return (
        <PageWrapper>
            <section className="w-full flex flex-wrap items-start">
                <StoryHeader story={story} />

                <StoryDescription story={story} />
            </section>
        </PageWrapper>
    );
};
