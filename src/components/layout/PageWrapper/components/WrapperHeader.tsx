import clsx from "clsx";
import { WrapperHeaderProps } from "../../../../models/PageWrapper";
import { Logo } from "../../Navbar/components/Logo";
import { Notifications } from "./Notifications";
import { Searchbar } from "./Searchbar";

export const WrapperHeader = ({
    hideSearchbar,
    hideHeader,
}: WrapperHeaderProps) => {
    const searchbarStyles = clsx({
        ["hidden md:flex"]: hideSearchbar,
    });

    const headerStyles = clsx({
        ["hidden md:flex"]: hideHeader,
    });

    return (
        <>
            <div className="flex justify-center md:hidden w-full">
                <Logo />
            </div>
            <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between mb-4 lg:mb-12">
                <div className={`${searchbarStyles}`}>
                    <Searchbar />
                </div>
                <div className={`${headerStyles}`}>
                    <Notifications />
                </div>
            </div>
        </>
    );
};
