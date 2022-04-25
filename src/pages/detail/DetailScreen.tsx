import { UserFeeds, UserHeader } from "../../components/detail";
import { PageWrapper } from "../../components/layout/PageWrapper/PageWrapper";
import { NoFoundData } from "../../components/utils/no-found-data/NoFoundData";
import { FeedItems } from "../../data/data";
import { User } from "../../models/Users";

export const DetailScreen = ({ user }: { user: User | undefined }) => {
    if (!user) return <NoFoundData text="User not found" />;

    return (
        <PageWrapper hideSearchbar hideHeader>
            <div className="w-full flex flex-col items-start">
                <UserHeader user={user} />

                <UserFeeds
                    feeds={FeedItems.filter((feed) => feed.user.id === user.id)}
                />
            </div>
        </PageWrapper>
    );
};
