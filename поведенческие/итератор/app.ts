interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

interface Collection {
  createIterator(): Iterator<Number>;
}

class ConcreteIterator implements Iterator<Number> {
  private collection: Number[];
  private index: number = 0;

  constructor(collection: Number[]) {
    this.collection = collection;
  }

  next(): any {
    const result = this.collection[this.index];
    this.index += 1;
    return result;
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

class ConcreteCollection implements Collection {
  private collection: Number[] = [];

  constructor(collection: Number[]) {
    this.collection = collection;
  }

  createIterator(): Iterator<Number> {
    return new ConcreteIterator(this.collection);
  }
}

const collection: ConcreteCollection = new ConcreteCollection([0, 1, 2, 3]);
const iterator: Iterator<Number> = collection.createIterator();

while (iterator.hasNext()) {
   const number: Number = iterator.next();
   console.log(`Number: ${number.valueOf()}`);
}