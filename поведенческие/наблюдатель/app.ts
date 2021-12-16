interface Observer{
   handleEvent(vacancies:string[]):void
}

interface Observed{
   addObserv(observer:Observer):void

   notifyObservers():void
}

class Subscriber  implements Observer{
   name:string
   constructor(name:string) {
      this.name = name
   }
   
   public handleEvent(vacancies: string[]): void {
       console.log('Дорогой '+this.name+', у нас есть следующие вакансии: '+vacancies);
   }
}


class JSDeveloperFobSite  implements Observed{
   vacancies:string[] = []
   subscribers:Observer[] = []

   public addVacancy(vacance:string):void{
      this.vacancies.push(vacance)
      this.notifyObservers()
   }

   public addObserv(observer: Observer): void {
       this.subscribers.push(observer)
   }
   public notifyObservers(): void {
       for(let ob of this.subscribers){
          ob.handleEvent(this.vacancies)
       }
   }
}

let jobSite:JSDeveloperFobSite = new JSDeveloperFobSite();

jobSite.addVacancy('Senior developer')
jobSite.addVacancy('Midle developer');

let user1:Observer = new Subscriber('Alex');
let user2:Observer = new Subscriber('Ivan');

jobSite.addObserv(user1);
jobSite.addObserv(user2);

jobSite.addVacancy('Junior Developer');
