import clsx from "clsx";
import { Size } from "../../../models/Size";

interface Props {
    text: string;
    type?: Size;
}

export const Heading = ({ text, type = Size.normal }: Props) => {
    const styles = clsx({
        ["text-[1.3rem]"]: type == Size.normal,
        ["text-[1.7rem]"]: type == Size.large,
        ["text-[2rem]"]: type == Size.xlarge,
        ["text-[2.3rem]"]: type == Size.xxlarge,
    });

    return (
        <h1 className={`text-item-black font-bold mb-4 ${styles}`}>{text}</h1>
    );
};
