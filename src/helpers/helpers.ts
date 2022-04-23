export const parseThousand = (value: number) => {
    if (value < 1000) {
        return `${value}`;
    } else if (value < 1000000) {
        return `${Math.floor(value / 1000)}k`;
    } else {
        return `${Math.floor(value / 1000000)}m`;
    }
};
