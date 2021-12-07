interface People{
    name()
    surname()
    phone()
}

class Person{
    getName():void{
        console.log('Его имя Алекс')
    }
    getSurname():void{
        console.log('Его фамилия Петров')
    }
    getPhone():void{
        console.log('Его телефон 095302855')
    }
}

class Adapter extends Person implements People {
    name():void{
        this.getName()
    }
    surname():void{
        this.getSurname()
    }
    phone():void{
        this.getPhone()
    }
}

let man = new Adapter();
man.getName();
man.getSurname();
man.getSurname();