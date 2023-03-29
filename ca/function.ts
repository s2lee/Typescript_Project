function hello(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello("Sam"));
console.log(hello("Sam", 30));

function add(...nums: number[]): number{
    return nums.reduce((result, num) => result + num, 0); 
}

add(1, 2, 3);

interface User {
    name: string;
}

const Sam: User = {name: 'Sam'}
function showName(this:User, age:number, gender:'m'|'f'){
    console.log(this.name, age, gender)
}

const a = showName.bind(Sam);
a(30, 'm');

// overloading
interface Bird {
    name: string;
    age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): Bird;
function join(name: string, age:number | string): Bird | string {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요."
    }
}

const eagle: Bird = join("eagle", 4);
const chicken: string = join("chicken", "2");