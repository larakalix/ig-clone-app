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
        ["w-[3rem] p-[0.2rem]"]: type === Size.small,
        ["w-[4rem] p-1"]: type === Size.normal,
        ["w-[6.5rem] p-2"]: type === Size.large,
    });

    return (
        <div
            className={`${styles} h-auto rounded-full border-2 border-pink flex items-center justify-center ${className}`}
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
