const player1: {
    name: string;
    age?: number;
} = {
    name: 'Tom',
};

if (player1.age && player1.age < 10) {
    console.log('h');
}
type Age = number;
type Player = {
    readonly name: string;
    age?: Age;
};

const player2: Player = {
    name: 'Han',
    age: 49,
};

function playerMaker(name: string): Player {
    return {
        name,
    };
}

const kaka = playerMaker('kaka');
kaka.age = 12;

const playerMaker2 = (name: string): Player => ({ name });
const haha = playerMaker('kaka');
haha.age = 42;
// haha.name = 'd'

const doctor: readonly [string, number, boolean] = ['piko', 32, true];

let f: any = true;
f = 3;

let p: unknown;
if (typeof p === 'number') {
    let q = p + 1;
} else if (typeof p === 'string') {
    let q = p.toUpperCase();
}

function showError(): never {
    throw new Error('xxx');
}
 