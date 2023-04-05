type Chef<E> = {
    name: string;
    extraInfo: E;
};

type RyuExtra = {
    favFood: string;
};
type RyuChef = Chef<RyuExtra>;

const ryu: RyuChef = {
    name: 'Ryu',
    extraInfo: {
        favFood: 'cake',
    },
};

const lee: Chef<null> = {
    name: 'lee',
    extraInfo: null,
};
