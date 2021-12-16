class ConcreteIterator {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }
    next() {
        const result = this.collection[this.index];
        this.index += 1;
        return result;
    }
    hasNext() {
        return this.index < this.collection.length;
    }
}
class ConcreteCollection {
    constructor(collection) {
        this.collection = [];
        this.collection = collection;
    }
    createIterator() {
        return new ConcreteIterator(this.collection);
    }
}
const collection = new ConcreteCollection([0, 1, 2, 3]);
const iterator = collection.createIterator();
while (iterator.hasNext()) {
    const number = iterator.next();
    console.log(`Number: ${number.valueOf()}`);
}
