interface Developer{
    writeCode():void
}

class JSDeveloper implements Developer{
    public writeCode(): void {
        console.log('JS Developer writes code');
    }
}

class PythonDeveloper implements Developer{
    public writeCode(): void {
        console.log('Python Developer writes code');
    }
}

class DeveloperFactory{
    private developers = new Map<string,Developer>()

    public getDeveloperBySpeciality(speciality:string):Developer{
        let developer = this.developers.get(speciality)

        if(developer == null){
            switch(speciality){
                case 'JS':
                    console.log('Нанимаем jS разработчика')
                    developer = new JSDeveloper()
                    break
                case 'Python':
                    console.log('Нанимаем Python разработчика')
                    developer = new PythonDeveloper()
            }
            this.developers.set(speciality,developer)
        }
        return developer
    }
}

let developerFactory:DeveloperFactory = new DeveloperFactory();

let developers:Developer[] =[];

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

for(let developer of developers){
    developer.writeCode()
}

