class Singleton {
    constructor() {
        this.randomNUmber = Math.random();
    }
    static singletonGo() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
console.log(Singleton.singletonGo().randomNUmber);
console.log(Singleton.singletonGo().randomNUmber);
console.log(Singleton.singletonGo().randomNUmber);
