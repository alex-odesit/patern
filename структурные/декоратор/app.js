class JSDeveloper {
    makeJob() {
        return 'JS developer writes code';
    }
}
class Decorator {
    constructor(developer) {
        this.developer = developer;
    }
    makeJob() {
        return this.developer.makeJob();
    }
}
class SeniorJSDeveloper extends Decorator {
    constructor(developer) {
        super(developer);
    }
    drinkCofee() {
        return ' and drink coffe';
    }
    makeJob() {
        return super.makeJob() + this.drinkCofee();
    }
}
class TeamLeadJSDeveloper extends Decorator {
    constructor(developer) {
        super(developer);
    }
    sendWork() {
        return ' then sends his work';
    }
    makeJob() {
        return super.makeJob() + this.sendWork();
    }
}
let developer1 = new TeamLeadJSDeveloper(new SeniorJSDeveloper(new JSDeveloper));
console.log(developer1.makeJob());
