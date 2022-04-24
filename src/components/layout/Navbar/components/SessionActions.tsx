import { FiLogOut } from "react-icons/fi";

export const SessionActions = () => {
    return (
        <div className="relative md:absolute bottom-0 md:bottom-[5%] left-0 right-[unset] md:right-0 p-0 md:p-10 w-full md:w-auto group transition-colors cursor-pointer">
            <div className="flex items-center justify-between w-full font-noto font-semibold border-t border-gray-200 pt-8 text-item-black dark:text-white group-hover:text-pink">
                <FiLogOut className="mr-5 text-[1.2rem]" />
                <div className="flex items-center justify-between w-full font-noto font-semibold">
                    Logout
                </div>
            </div>
        </div>
    );
};
