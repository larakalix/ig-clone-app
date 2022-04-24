import { BiBell, BiEnvelope, BiPlus } from "react-icons/bi";

export const Notifications = () => {
    return (
        <div className="mb-4 md:mb-0 order-1 md:order-2">
            <ul className="flex items-center space-x-8">
                <li>
                    <ul className="flex items-center space-x-8">
                        <li>
                            <a href="#!">
                                <BiBell className="text-black dark:text-white text-[1.2rem] md:text-[1.4rem]" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <BiEnvelope className="text-black dark:text-white text-[1.2rem] md:text-[1.4rem]" />
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
    );
};
