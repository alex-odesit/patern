interface Developer{
    writeCode()
}

class JSDeveloper implements Developer{
    writeCode():void{
        console.log('JS Developer write code');
    }
}
class PythonDeveloper implements Developer{
    writeCode():void{
        console.log('Python Developer write code');
    }
}

class Team{
    private developers = new Map()

    public addDeveloper(concreteDev:Developer):void{
        let size:number = this.developers.size
        this.developers.set(concreteDev,size)
    }
    public removeDeveloper(concreteDev:Developer):void{
        this.developers.delete(concreteDev)
    }
    public create():void{
        for(let person of this.developers.keys()){
            person.writeCode()
        }
    }
}

let person1:Developer = new JSDeveloper();
let person2:Developer = new PythonDeveloper();
let person3:Developer = new PythonDeveloper();

let team:Team = new Team();

team.addDeveloper(person1);
team.addDeveloper(person2);
team.addDeveloper(person3);
team.removeDeveloper(person2);

team.create()