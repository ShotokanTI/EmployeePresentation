interface Employee {
    [index: string]: number | string;
    id: number,
    name: string,
    description: string,
    position: string,
    photo: string,
}

interface HeaderTableEmployee {
    text: string,
    value: string
}

export type {
    Employee,
    HeaderTableEmployee
}