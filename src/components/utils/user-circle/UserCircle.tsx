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
    className,
    type = Size.normal,
}: Props) => {
    const styles = clsx({
        ["w-[4rem] p-1"]: type == Size.normal,
        ["w-[6.5rem] p-2"]: type == Size.large,
    });

    return (
        <div
            className={`rounded-full border-2 border-pink flex items-center justify-center ${className} ${styles}`}
        >
            <Image
                src={thumbnail}
                alt={alt}
                width="80"
                height="80"
                className="rounded-full"
            />
        </div>
    );
};
