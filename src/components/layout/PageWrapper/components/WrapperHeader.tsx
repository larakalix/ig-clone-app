import { BiSearch, BiBell, BiEnvelope, BiPlus } from "react-icons/bi";
import { WrapperHeaderProps } from "../../../../models/PageWrapper";
import { Logo } from "../../Navbar/components/Logo";

export const WrapperHeader = ({
    hideSearchbar,
    hideHeader,
}: WrapperHeaderProps) => {
    return (
        <>
            <div className="flex md:hidden w-full">
                <Logo />
            </div>
            <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-between mb-4 md:mb-12">
                {!hideSearchbar && (
                    <div className="mb-4 md:mb-0 order-2 md:order-1">
                        <div className="bg-nav-gray py-2 px-4 rounded-xl flex items-center">
                            <button className="cursor-pointer">
                                <BiSearch />
                            </button>
                            <input
                                type="text"
                                placeholder="Search for something..."
                                className="bg-transparent outline-none placeholder:text-[0.9rem] placeholder:pl-2 pl-2"
                            />
                        </div>
                    </div>
                )}
                {!hideHeader && (
                    <div className="mb-4 md:mb-0 order-1 md:order-2">
                        <ul className="flex items-center space-x-8">
                            <li>
                                <ul className="flex items-center space-x-8">
                                    <li>
                                        <a href="#!">
                                            <BiBell className="text-[1.2rem] md:text-[1.4rem]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <BiEnvelope className="text-[1.2rem] md:text-[1.4rem]" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="#!"
                                    className="py-2 px-4 text-[0.8rem] font-noto flex items-center bg-gradient-to-r from-pink via-[#f17556] to-oramge rounded-lg text-white font-medium"
                                >
                                    <span className="bg-white/20 p-1 rounded-full mr-2">
                                        <BiPlus className="text-white text-[1rem] font-bold" />
                                    </span>
                                    Add photo
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};
