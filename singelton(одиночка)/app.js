class Singleton {
    constructor() {
        this.number = 0;
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    numberGo() {
        this.number++;
    }
    getNumber() {
        return this.number;
    }
}
const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();
object1.numberGo();
object1.numberGo();
object2.numberGo();
object2.numberGo();
object2.numberGo();
console.log(object1.getNumber());
console.log(object2.getNumber());
