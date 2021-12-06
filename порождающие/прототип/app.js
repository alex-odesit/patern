class Proto {
    constructor() {
        this.name = 'Alex';
        this.age = 19;
    }
    clone() {
        return Object.assign({}, this);
    }
}
let main = new Proto();
let proto1 = main.clone();
proto1.name = 'Danya';
console.log(main);
console.log(proto1);
