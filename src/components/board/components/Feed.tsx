import { Heading } from "../../utils/heading/Heading";

export const Feed = () => {
    return (
        <div className="w-full mb-8">
            <Heading text="Feed" />

            <div className="flex flex-wrap items-center">
                {/* {Users.map(({ id, thumbnail }: User) => (
                    <div key={id}>
                        <UserCircle
                            alt={id}
                            thumbnail={thumbnail}
                            className="mr-3"
                        />
                    </div>
                ))} */}
            </div>
        </div>
    );
};
