import Link from "next/link";
import { PageWrapper } from "../../components/layout/PageWrapper/PageWrapper";

export const ExploreScreen = () => {
    return (
        <PageWrapper>
            <div className="h-[70vh] w-full flex items-center justify-center">
                <h1 className="font-noto text-[1.1rem] text-item-black">
                    Feature in progress.
                    <Link href="/">
                        <a className="text-blue-500"> Back to Instagram.</a>
                    </Link>
                </h1>
            </div>
        </PageWrapper>
    );
};
