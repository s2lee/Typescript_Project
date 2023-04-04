type Add = {
    (a: number, b: number): number;
    (a: number, b: string): number;
    (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
    if (c) return a + b + c;
    if (typeof b === 'string') return a;
    return a + b;
};

type Config = {
    path: string;
    state: object;
};

type Push = {
    (path: string): void;
    (config: Config): void;
};

const push: Push = (config) => {
    if (typeof config === 'string') {
        console.log(config);
    } else {
        console.log(config.path);
    }
};

type SuperPrint = {
    <T>(arg: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const temp = superPrint([1, 2, '3', true]);
