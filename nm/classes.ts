abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string,
        protected ability: number
    ) {}
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    abstract getAbility(): void;
}

class Lawyer extends User {
    getAbility(): void {
        console.log(this.ability + 5);
    }
}

const hyun = new Lawyer('hyun', 'seo', 'hit', 3);
//  hyun.fistName
// hyun.nickname = "hits"
console.log(hyun.getFullName());

type Words = {
    [key: string]: string;
};

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    add(word: Word) {
        // 클래스를 타입으로
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term];
    }
    delete(term: string) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    }
    update(oldTerm: string, newTerm: string) {
        if (this.words[oldTerm] !== undefined) {
            this.words[newTerm] = this.words[oldTerm];
        }
    }
}

class Word {
    constructor(public readonly term: string, public readonly def: string) {}
    addDef(term: string, def: string) {}
}

const rice = new Word('rice', 'main meal');
const dict = new Dict();
// rice.def = "xxx"
dict.add(rice);
dict.def('rice');
