import { Users } from "../../../data/data";
import { User } from "../../../models/Users";
import { Heading } from "../../utils/heading/Heading";
import { UserCircle } from "../../utils/user/UserCircle";
import { EmblaCarousel } from "./Carousel";

export const Stories = () => {
    return (
        <div className="w-full mb-8">
            <Heading text="Stories" />

            <EmblaCarousel
                slides={Users.map(({ id, thumbnail }: User) => (
                    <div key={id}>
                        <UserCircle
                            alt={id}
                            thumbnail={thumbnail}
                            className="mr-3 select-none cursor-pointer saturate-100 hover:saturate-200 transition-all"
                        />
                    </div>
                ))}
                options={{
                    align: "start",
                    containScroll: "keepSnaps",
                    startIndex: 0,
                    draggable: true,
                    loop: false,
                    slidesToScroll: 1,
                    skipSnaps: true,
                }}
            />
        </div>
    );
};
