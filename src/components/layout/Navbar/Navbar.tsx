import { useState } from "react";
import { NavItems, SessionActions, UserBadge } from "./components";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gray-400 fixed h-screen p-10 w-[15vw] flex flex-col items-center">
            <UserBadge />

            <NavItems />

            <SessionActions />
        </div>
    );
};
