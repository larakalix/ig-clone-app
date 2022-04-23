import Image from "next/image";

export const Logo = () => {
    return (
        <div className="w-full mb-8 text-center">
            <Image
                src="/images/logo.png"
                width={103}
                height={29}
                alt="Instragram clone app logo"
            />
        </div>
    );
};
