import Link from "next/link";
import { PageWrapper } from "../../components/layout/PageWrapper/PageWrapper";

export const ErrorScreen = () => {
    return (
        <PageWrapper hideHeader>
            <div className="h-[50vh] md:h-[80vh] w-full flex flex-col items-center justify-center">
                <h1 className="font-noto font-semibold mb-4 text-[1.1rem]">
                    This page is not available.
                </h1>
                <p className="text-center text-[0.9rem]">
                    The link you followed may be incorrect or the page may have
                    been removed.
                    <Link href="/">
                        <a className="text-blue-500"> Back to Instagram.</a>
                    </Link>
                </p>
            </div>
        </PageWrapper>
    );
};
