import { motion } from "framer-motion";
import { PageWrapperProps } from "../../../models/PageWrapper";
import { WrapperHeader } from "./components/WrapperHeader";

export const PageWrapper = ({
    children,
    hideSearchbar,
    hideHeader,
}: PageWrapperProps) => {
    return (
        <motion.div
            className="min-h-screen flex flex-col items-start justify-start ml-0 md:ml-[35vw] lg:ml-[25vw] xl:ml-[20vw] p-10 rounded-l-3xl bg-white drop-shadow-xl"
            {...config}
        >
            <WrapperHeader {...{ hideSearchbar, hideHeader }} />

            {children}
        </motion.div>
    );
};

const config: any = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            scale: 3,
        },
    },
};
