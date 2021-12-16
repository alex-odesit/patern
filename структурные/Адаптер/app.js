class Person {
    getName() {
        console.log('Его имя Алекс');
    }
    getSurname() {
        console.log('Его фамилия Петров');
    }
    getPhone() {
        console.log('Его телефон 095302855');
    }
}
class Adapter extends Person {
    name() {
        this.getName();
    }
    surname() {
        this.getSurname();
    }
    phone() {
        this.getPhone();
    }
}
let man = new Adapter();
man.name();
man.surname();
man.phone();
