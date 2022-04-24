import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { Users } from "../../../data/data";
import { NavItems, SessionActions, UserBadge } from "./components";
import { Logo } from "./components/Logo";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="fixed top-[1rem] right-[1rem] z-50 md:hidden">
                {open ? (
                    <CgClose
                        className="text-[1.3rem] cursor-pointer text-item-black dark:text-white"
                        onClick={handleClick}
                    />
                ) : (
                    <CgMenu
                        className="text-[1.3rem] cursor-pointer text-item-black dark:text-white"
                        onClick={handleClick}
                    />
                )}
            </div>
            <div
                className={`bg-nav-gray dark:bg-dar-nav-gray fixed h-screen p-10 flex w-full md:w-[35vw] lg:w-[25vw] xl:w-[20vw] flex-col items-center ${
                    open ? "left-0" : "left-[100%]"
                } md:left-[unset] z-40 transition-colors`}
            >
                <Logo />

                <UserBadge user={Users[0]} />

                <NavItems />

                <SessionActions />
            </div>
        </>
    );
};
