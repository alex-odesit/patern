abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Это результат ${product.operation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}




interface Product {
    operation(): string;
}
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Продукта 1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Продукта 2}';
    }
}

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}


clientCode(new ConcreteCreator1());
console.log(new ConcreteCreator1());

clientCode(new ConcreteCreator2());