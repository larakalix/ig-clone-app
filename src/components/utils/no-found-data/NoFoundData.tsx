export const NoFoundData = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center justify-center h-[60vh] w-full">
            <h1 className="text-center">{text}</h1>
        </div>
    );
};
