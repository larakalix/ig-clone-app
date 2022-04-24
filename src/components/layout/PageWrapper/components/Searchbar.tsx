import { BiSearch } from "react-icons/bi";

export const Searchbar = () => {
    return (
        <div className="mb-4 lg:mb-0 order-2 md:order-1">
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
    );
};
