class JSDeveloper {
    writeCode() {
        console.log('JS Developer writes code');
    }
}
class PythonDeveloper {
    writeCode() {
        console.log('Python Developer writes code');
    }
}
class DeveloperFactory {
    constructor() {
        this.developers = new Map();
    }
    getDeveloperBySpeciality(speciality) {
        let developer = this.developers.get(speciality);
        if (developer == null) {
            switch (speciality) {
                case 'JS':
                    console.log('Нанимаем jS разработчика');
                    developer = new JSDeveloper();
                    break;
                case 'Python':
                    console.log('Нанимаем Python разработчика');
                    developer = new PythonDeveloper();
            }
            this.developers.set(speciality, developer);
        }
        return developer;
    }
}
let developerFactory = new DeveloperFactory();
let developers = [];
developers.push(developerFactory.getDeveloperBySpeciality('JS'));
developers.push(developerFactory.getDeveloperBySpeciality('JS'));
developers.push(developerFactory.getDeveloperBySpeciality('JS'));
developers.push(developerFactory.getDeveloperBySpeciality('JS'));
developers.push(developerFactory.getDeveloperBySpeciality('JS'));
developers.push(developerFactory.getDeveloperBySpeciality('Python'));
developers.push(developerFactory.getDeveloperBySpeciality('Python'));
developers.push(developerFactory.getDeveloperBySpeciality('Python'));
developers.push(developerFactory.getDeveloperBySpeciality('Python'));
developers.push(developerFactory.getDeveloperBySpeciality('Python'));
for (let developer of developers) {
    developer.writeCode();
}
