import type { Employee } from "~/mocks/employee/interfaces/employee.interface";

function hasPrevious(element: number, collection: any[]): boolean {
    return element > 1;
}

function hasNext(element: number, collection: any[]): boolean {
    return element <= collection.length - 1;
}


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


function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: number | undefined;
    return function (...args: any[]) {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => func.apply(args), wait);
    };
}

export { previous, next, debounce, hasNext, hasPrevious }