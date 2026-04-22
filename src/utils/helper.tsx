export function shiftGalleryLeft(index: number, setIndex: Function) {
    if (index === 0) {
        setIndex(2);
    } else {
        setIndex(index - 1);
    }

    shareIndex(index);
}

export function shiftGalleryRight(index: number, setIndex: Function) {
    if (index === 2) {
        setIndex(0);
    } else {
        setIndex(index + 1);
    }

    shareIndex(index);
}

function shareIndex(index: number) {
    return index;
}