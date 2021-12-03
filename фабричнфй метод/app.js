class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Это результат ${product.operation()}`;
    }
}
class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreteProduct1();
    }
}
class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}
class ConcreteProduct1 {
    operation() {
        return '{Продукта 1}';
    }
}
class ConcreteProduct2 {
    operation() {
        return '{Продукта 2}';
    }
}
function clientCode(creator) {
    console.log(creator.someOperation());
}
clientCode(new ConcreteCreator1());
console.log(new ConcreteCreator1());
clientCode(new ConcreteCreator2());
