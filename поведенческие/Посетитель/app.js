class ProjectClass {
    beWritten(developer) {
        developer.createClass(this);
    }
}
class DataBase {
    beWritten(developer) {
        developer.createBase(this);
    }
}
class Test {
    beWritten(developer) {
        developer.createTest(this);
    }
}
class Project {
    constructor() {
        this.projectElments = [];
        this.projectElments.push(new ProjectClass());
        this.projectElments.push(new DataBase());
        this.projectElments.push(new Test());
    }
    beWritten(developer) {
        for (let item of this.projectElments) {
            item.beWritten(developer);
        }
    }
}
class Junior {
    createClass(projectClass) {
        console.log('Пишет плохой код');
    }
    createBase(dataBase) {
        console.log('Роняет базу данных');
    }
    createTest(test) {
        console.log('Плохо тестирует');
    }
}
class Senior {
    createClass(projectClass) {
        console.log('Пишет качественный код');
    }
    createBase(dataBase) {
        console.log('Подымает базу данных');
    }
    createTest(test) {
        console.log('Хорошо тестирует');
    }
}
let senior = new Senior();
let junior = new Junior();
let project = new Project();
console.log('Работает junior');
project.beWritten(junior);
console.log('\n===================\n');
console.log('Работает senior');
project.beWritten(senior);
