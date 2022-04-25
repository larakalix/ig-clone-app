import { useState } from "react";
import { PageWrapper } from "../../components/layout/PageWrapper/PageWrapper";
import { Heading } from "../../components/utils/heading/Heading";
import { NoFoundData } from "../../components/utils/no-found-data/NoFoundData";
import { Story } from "../../models/Stories";
import { User } from "../../models/Users";

export const SearchScreen = ({ keyword }: { keyword: string }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [stories, setStories] = useState<Story[]>([]);

    if (users.length === 0 && stories.length === 0)
        return (
            <PageWrapper>
                <Heading text={`Results for keyword: ${keyword}`} />
                <NoFoundData text="No result found" />
            </PageWrapper>
        );

    return (
        <PageWrapper>
            <Heading text={`Results for keyword: ${keyword}`} />
        </PageWrapper>
    );
};
