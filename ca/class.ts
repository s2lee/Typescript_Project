// Access modifier - public, private, protected
/*
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
private - 해당 클래스 내부에서만 접근 가능
protected - 자식 클래스에서 접근가능, 인스턴스 접근 X
*/

class Car {
    model: string = 'car';
    // private model: string ="car";
    // #model: string = "car";
    // protected model: string = "car";
    color: string;
    static window = 4;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log('start');
        console.log(this.model);
        console.log(Car.window);
    }
}

const bmw = new Car('red');

class Kia extends Car {
    constructor(color: string) {
        super(color);
    }
    showName() {
        console.log(super.model);
    }
}

const z4 = new Kia('blue');
console.log(z4.model);
console.log(Car.window);
