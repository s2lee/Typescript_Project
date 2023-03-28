let car: string = 'bmw';

let age: number = 30;
let isAdult: boolean = true;
let a1: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

let b: [string, number];
b = ['z', 1];
// b = [1, 'z'];

b[0].toLowerCase();
// b[1].toLowerCase();

function sayHello(): void {
    console.log('hello');
}

function showError(): never {
    throw new Error();
}
// enum : 특정 값만 입력 가능하게 강제하고 싶을 때 사용 + 값들이 공통점이 있을 때
enum Os {
    Window = 3,
    Ios = 10,
    Android = 'and',
}

console.log(Os[10]); // Ios
console.log(Os['Ios']); // 10

let myOs: Os;
myOs = Os.Window;

let n: null = null;
let u: undefined = undefined;
