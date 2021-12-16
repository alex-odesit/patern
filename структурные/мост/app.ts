abstract class Program{
    protected developer:Developer

    protected constructor(developer:Developer){
        this.developer = developer
    }

    public abstract developProgram():void
}


class BankSystem extends Program{
    public constructor(developer:Developer){
        super(developer)
    }
    public developProgram(){
        console.log('Bank system development in progress');
        this.developer.writeCode()
    }
}
class UniversitySystem extends Program{
    public constructor(developer:Developer){
        super(developer)
    }
    public developProgram(){
        console.log('University system development in progress');
        this.developer.writeCode()
    }
}



interface Developer{
    writeCode():void
}
class JSDeveloper implements Developer{
    public writeCode():void{
        console.log('JS developer writes code');
    }
}
class PythonDeveloper implements Developer{
    public writeCode():void{
        console.log('Python developer writes code');
    }
}

let program1:Program = new BankSystem(new JSDeveloper());
let program2:Program = new UniversitySystem(new PythonDeveloper());

program1.developProgram();
program2.developProgram();