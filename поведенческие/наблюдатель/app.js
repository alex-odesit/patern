class Subscriber {
    constructor(name) {
        this.name = name;
    }
    handleEvent(vacancies) {
        console.log('Дорогой ' + this.name + ', у нас есть следующие вакансии: ' + vacancies);
    }
}
class JSDeveloperFobSite {
    constructor() {
        this.vacancies = [];
        this.subscribers = [];
    }
    addVacancy(vacance) {
        this.vacancies.push(vacance);
        this.notifyObservers();
    }
    addObserv(observer) {
        this.subscribers.push(observer);
    }
    notifyObservers() {
        for (let ob of this.subscribers) {
            ob.handleEvent(this.vacancies);
        }
    }
}
let jobSite = new JSDeveloperFobSite();
jobSite.addVacancy('Senior developer');
jobSite.addVacancy('Midle developer');
let user1 = new Subscriber('Alex');
let user2 = new Subscriber('Ivan');
jobSite.addObserv(user1);
jobSite.addObserv(user2);
jobSite.addVacancy('Junior Developer');
