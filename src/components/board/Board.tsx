import { Logo } from "../layout/Navbar/components/Logo";
import { Stories, Feed } from "./components";

export const Board = () => {
    return (
        <div>
            <div className="flex md:hidden">
                <Logo />
            </div>

            <Stories />

            <Feed />
        </div>
    );
};
