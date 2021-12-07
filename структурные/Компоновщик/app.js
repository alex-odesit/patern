class JSDeveloper {
    writeCode() {
        console.log('JS Developer write code');
    }
}
class PythonDeveloper {
    writeCode() {
        console.log('Python Developer write code');
    }
}
class Team {
    constructor() {
        this.developers = new Map();
    }
    addDeveloper(concreteDev) {
        let size = this.developers.size;
        this.developers.set(concreteDev, size);
    }
    removeDeveloper(concreteDev) {
        this.developers.delete(concreteDev);
    }
    create() {
        for (let person of this.developers.keys()) {
            person.writeCode();
        }
    }
}
let person1 = new JSDeveloper();
let person2 = new PythonDeveloper();
let person3 = new PythonDeveloper();
let team = new Team();
team.addDeveloper(person1);
team.addDeveloper(person2);
team.addDeveloper(person3);
team.removeDeveloper(person2);
team.create();
