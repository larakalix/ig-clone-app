import { useState } from "react";
import { NavItems, SessionActions, UserBadge } from "./components";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-nav-gray fixed h-screen p-10 w-[20vw] flex flex-col items-center">
            <UserBadge />

            <NavItems />

            <SessionActions />
        </div>
    );
};
