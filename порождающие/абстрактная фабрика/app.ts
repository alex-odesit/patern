interface Developer{
    writeCode():void
}

interface Tester{
    testCode():void
}

interface Manager{
    managerProgect():void
}


interface Team{
    getDeveloper():Developer
    getTester():Tester
    getManager():Manager
}



class BankDeveloper implements Developer{
    writeCode(): void {
        console.log('В банковский проект нанят разработчик');
    }
}
class BankTester implements Tester{
    testCode(): void {
        console.log('В банковском проекте тестировщик тестирует код');
    }
}
class BankManager implements Manager{
    managerProgect(): void {
        console.log('В банковский проект нанаят менеджер');
    }
}



class BankTeam implements Team{
    getDeveloper(): Developer {
        return new BankDeveloper()
    }
    getManager(): Manager {
        return new BankManager()
    }
    getTester(): Tester {
        return new BankTester()
    }
}

let team:Team = new BankTeam();
let developer:Developer = team.getDeveloper();
let tester:Tester = team.getTester();
let manager:Manager = team.getManager();

developer.writeCode();
tester.testCode();
manager.managerProgect();