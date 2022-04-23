import useEmblaCarousel from "embla-carousel-react";
import { Users } from "../../../data/data";
import { User } from "../../../models/Users";
import { Heading } from "../../utils/heading/Heading";
import { UserCircle } from "../../utils/user-circle/UserCircle";

export const Stories = () => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="w-full mb-8">
            <Heading text="Stories" />

            <div className="flex flex-wrap items-center">
                <div className="embla" ref={emblaRef}>
                    
                </div>
                {[...Users, ...Users].map(({ id, thumbnail }: User) => (
                    <div key={id}>
                        <UserCircle
                            alt={id}
                            thumbnail={thumbnail}
                            className="mr-3"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
