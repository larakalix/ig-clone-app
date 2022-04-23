interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PageWrapper = ({ children }: Props) => {
    return (
        <div className="h-screen flex items-start justify-start ml-[20vw] p-10 rounded-l-3xl bg-white drop-shadow-xl overflow-hidden">
            {children}
        </div>
    );
};
