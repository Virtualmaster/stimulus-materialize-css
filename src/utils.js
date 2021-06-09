export function getOffsetLeft(elem) {
    let offsetLeft = 0;
    do {
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
    } while ((elem = elem.offsetParent) != null);
    return offsetLeft;
}

export function getOffsetTop(elem) {
    let offsetTop = 0;
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
    } while ((elem = elem.offsetParent) != null);
    return offsetTop;
}
