import clsx from "clsx";
import Image from "next/image";
import { Size } from "../../../models/Size";

interface Props {
    alt: string;
    thumbnail: string;
    className?: string;
    type?: Size;
}

export const UserCircle = ({
    alt,
    thumbnail,
    className = "",
    type = Size.normal,
}: Props) => {
    const styles = clsx({
        ["w-[3rem] h-auto p-[0.2rem]"]: type === Size.small,
        ["w-[4rem] h-auto p-1"]: type === Size.normal,
        ["w-[6.5rem] h-auto p-2"]: type === Size.large,
        ["w-[7rem] h-[7rem] p-1"]: type === Size.xlarge,
        ["w-[8.6rem] h-[8.6rem] p-2"]: type === Size.xxlarge,
    });

    return (
        <div
            className={`${styles} rounded-full border-2 border-pink flex items-center justify-center ${className}`}
        >
            <Image
                src={thumbnail}
                alt={alt}
                width="100%"
                height="100%"
                className="rounded-full"
            />
        </div>
    );
};
