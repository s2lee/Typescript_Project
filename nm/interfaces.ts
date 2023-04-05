type Team = 'web' | 'ios' | 'and';
type Health = 1 | 5 | 10;

interface Developer {
    nickname: string;
    team: Team;
    health: Health;
}

type Person = {
    nickname: string;
    team: Team;
    health: Health;
};

// type, interface 비교
interface ElectricPower {
    power: number;
}

interface ElectricPower {
    state: string;
}

interface ElectricPower {
    load: number;
}

interface Notebook extends ElectricPower {}

const macbook: Notebook = {
    power: 23,
    state: 'normal',
    load: 99,
};

type Price = {
    price: number;
};

type Monitor = Price & {};
const intel: Monitor = {
    price: 12,
};
