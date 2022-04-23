interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PageWrapper = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex items-start justify-start ml-0 md:ml-[20vw] p-10 rounded-l-3xl bg-white drop-shadow-xl">
            {children}
        </div>
    );
};
