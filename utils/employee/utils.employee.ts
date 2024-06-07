function previous(element: number): number {
    const isFirstElement = element == 1;
    if (isFirstElement) {
        return element;
    } else {
        return --element;
    }

}

function next(element: number, list: Array<any>): number {
    const noMoreEmployees = element <= list.length - 1

    if (noMoreEmployees) {
        return ++element;
    } else {
        return element;
    }

}

export { previous, next }