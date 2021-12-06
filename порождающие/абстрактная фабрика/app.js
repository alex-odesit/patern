class T34 {
    constructor() {
        this.name = 't-34';
        this.speed = 100;
    }
}
class Matilda {
    constructor() {
        this.name = 'matilda';
        this.speed = 30;
    }
}
class Helcot {
    constructor() {
        this.name = 'helcot';
        this.speed = 38;
    }
}
console.log(`Танк:${new T34().name} Скорость:${new T34().speed}`);
console.log(`Танк:${new Matilda().name} Скорость:${new Matilda().speed}`);
console.log(`Танк:${new Helcot().name} Скорость:${new Helcot().speed}`);
