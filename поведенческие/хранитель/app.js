class Project {
    setVersionAndDate(version) {
        this.version = version;
        this.date = new Date();
    }
    save() {
        return new Save(this.version, this.date);
    }
    load(save) {
        this.version = save.getVersion();
        this.date = save.getDate();
    }
}
class Save {
    constructor(version, date) {
        this.version = version;
        this.date = date;
    }
    getDate() {
        return this.date;
    }
    getVersion() {
        return this.version;
    }
}
class Github {
    getSave() {
        return this.save;
    }
    setSave(save) {
        this.save = save;
    }
}
let project = new Project();
let gitGub = new Github();
console.log('Создание нового объекта');
project.setVersionAndDate('Version 1.0');
console.log(project);
console.log('Сохранение этой версии на Github');
gitGub.setSave(project.save());
console.log('Создание проекта версии 1.1');
project.setVersionAndDate('Version 1.1');
console.log(project);
console.log('Что-то пошло не так, надо откатиться');
project.load(gitGub.getSave());
console.log(project);
