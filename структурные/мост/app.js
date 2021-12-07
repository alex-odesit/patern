class Program {
    constructor(developer) {
        this.developer = developer;
    }
}
class BankSystem extends Program {
    constructor(developer) {
        super(developer);
    }
    developProgram() {
        console.log('Bank system development in progress');
        this.developer.writeCode();
    }
}
class UniversitySystem extends Program {
    constructor(developer) {
        super(developer);
    }
    developProgram() {
        console.log('University system development in progress');
        this.developer.writeCode();
    }
}
class JSDeveloper {
    writeCode() {
        console.log('JS developer writes code');
    }
}
class PythonDeveloper {
    writeCode() {
        console.log('Python developer writes code');
    }
}
let program1 = new BankSystem(new JSDeveloper());
let program2 = new UniversitySystem(new PythonDeveloper());
program1.developProgram();
program2.developProgram();
