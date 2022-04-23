import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/">
            <a className="w-full mb-8 text-center">
                <Image
                    src="/images/logo.png"
                    width={103}
                    height={29}
                    alt="Instragram clone app logo"
                />
            </a>
        </Link>
    );
};
