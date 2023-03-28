let user1: object;

user1 = {
    name: 'xx',
    age: 30,
};

// console.log(user1.name);

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
    name: string;
    age: number;
    gender?: string; // optional
    readonly birthYear: number; //read only
    [grade: number]: Score;
}

let user2: User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
    // 3: 'E',
};

user2.age = 20;
user2.gender = 'male';
// user2.birthYear = 1999;

console.log(user2.age);

interface Add {
    (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
    return x + y;
};

add(10, 20);

interface IsAdult {
    (age: number): boolean;
}

const a: IsAdult = (age) => {
    return age > 19;
};

a(33);

// implements
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color = 'red';
    wheels = 4;
    start() {
        console.log('go...');
    }
}

class Audi implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
        this.color = c;
    }
    start() {
        console.log('go..');
    }
}

const au = new Audi('white');
console.log(au);
au.start();

// extends
interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz: Benz = {
    color: 'black',
    wheels: 4,
    start() {
        console.log('go.');
    },
    door: 5,
    stop() {
        console.log('stop');
    },
};

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price: number;
}
