function getSize<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["a", "b", "c"]
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize<boolean>(arr3);

const arr4 = [{}, {}, { name: "Tim" }];
getSize<object>(arr4);


interface Phone<T> {
    name: string;
    price: number;
    option: T;
}

const p1: Phone<{ color: string; coupon: boolean; }> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};

const p2: Phone<string> = {
    name: "s20",
    price: 1300,
    option: "good",
}


interface Cat {
    name: string;
    age: number;
}

interface Fruit {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const cat: Cat = { name: "a", age:3 }
const fruit: Fruit = { name: "apple", color: "red" }
const book: Book = { price: 2000 }

function showName<T extends { name: string }>(data: T): string {
    return data.name;
}

showName(cat);
showName(fruit);
// showName(book);