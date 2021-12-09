class BankDeveloper {
    writeCode() {
        console.log('В банковский проект нанят разработчик');
    }
}
class BankTester {
    testCode() {
        console.log('В банковском проекте тестировщик тестирует код');
    }
}
class BankManager {
    managerProgect() {
        console.log('В банковский проект нанаят менеджер');
    }
}
class BankTeam {
    getDeveloper() {
        return new BankDeveloper();
    }
    getManager() {
        return new BankManager();
    }
    getTester() {
        return new BankTester();
    }
}
let team = new BankTeam();
let developer = team.getDeveloper();
let tester = team.getTester();
let manager = team.getManager();
developer.writeCode();
tester.testCode();
manager.managerProgect();
