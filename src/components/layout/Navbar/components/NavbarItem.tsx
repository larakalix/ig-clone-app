import Link from "next/link";
import { NavItem } from "../../../../models/NavItem";

export const NavbarItem = ({
    label,
    route,
    counter,
    icon: ItemIcon,
}: NavItem) => {
    return (
        <Link href={route}>
            <a className="flex items-center mb-4 text-item-black group hover:text-pink transition-colors">
                {ItemIcon ? (
                    <ItemIcon className="mr-5 text-[1.2rem] text-item-black group-hover:text-pink transition-colors" />
                ) : null}
                <div className="flex items-center justify-between w-full">
                    <span>{label}</span>
                    {counter && counter > 0 ? (
                        <span className="text-gray-400 text-[0.8rem]">
                            {counter}
                        </span>
                    ) : null}
                </div>
            </a>
        </Link>
    );
};
