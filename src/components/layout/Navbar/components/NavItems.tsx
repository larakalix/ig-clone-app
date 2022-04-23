import { NavbarItems } from "../../../../data/data";
import { NavItem } from "../../../../models/NavItem";
import { NavbarItem } from "./NavbarItem";

export const NavItems = () => {
    return (
        <div className="w-full">
            {NavbarItems.map(({ label, ...props }: NavItem) => (
                <NavbarItem key={label} label={label} {...props} />
            ))}
        </div>
    );
};
