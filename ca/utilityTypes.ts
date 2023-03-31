// keyof
interface Order {
    id: number;
    menu: string;
    isFinish: boolean;
}

type OrderKey = keyof Order; // 'id' | 'menu' | 'gender'
const ok: OrderKey = 'isFinish';

// Partial<T>
interface Admin {
    id: number;
    name: string;
    age: number;
    gender: 'm' | 'f';
}

let subAdmin1: Partial<Admin> = {
    id: 1,
    name: 'Bob',
};

// Required<T>
let subAdmin2: Required<Admin> = {
    id: 2,
    name: 'Bob',
    age: 23,
    gender: 'm',
};

// Readonly<T>
let subAdmin3: Readonly<Admin> = {
    id: 3,
    name: 'Smith',
    age: 22,
    gender: 'm',
};
// subAdmin3.id = 5;

// Record<K, T>
type Grade = 1 | 2 | 3 | 4;
type Score = 'A' | 'B' | 'C' | 'D' | 'F';

const score: Record<Grade, Score> = {
    1: 'A',
    2: 'C',
    3: 'D',
    4: 'F',
};

function isValid(admin: Admin) {
    const result: Record<keyof Admin, boolean> = {
        id: admin.id > 0,
        name: admin.name !== '',
        age: admin.age > 0,
        gender: admin.gender in ['m', 'w'],
    };
    return result;
}

// Pick<T, K>
const subAdmin4: Pick<Admin, 'id' | 'age'> = {
    id: 0,
    age: 26,
};

// Omit<T, K>
const subAdmin5: Omit<Admin, 'id' | 'age'> = {
    name: 'kaka',
    gender: 'f',
};

// Exclude<T1, T2>
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<T>
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>; //?
