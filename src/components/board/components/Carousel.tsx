import { ReactNode } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import styles from "./stories.module.scss";

type PropType = {
    options?: EmblaOptionsType;
    slides: ReactNode[];
};

export const EmblaCarousel = ({ options, slides }: PropType) => {
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {slides.map((slide, index) => (
                    <div className={styles.embla__slide} key={index}>
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};
