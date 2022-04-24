import { WrapperHeaderProps } from "../../../../models/PageWrapper";
import { Logo } from "../../Navbar/components/Logo";
import { Notifications } from "./Notifications";
import { Searchbar } from "./Searchbar";

export const WrapperHeader = ({
    hideSearchbar,
    hideHeader,
}: WrapperHeaderProps) => {
    return (
        <>
            <div className="flex md:hidden w-full">
                <Logo />
            </div>
            <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between mb-4 lg:mb-12">
                {!hideSearchbar && <Searchbar />}
                {!hideHeader && <Notifications />}
            </div>
        </>
    );
};
