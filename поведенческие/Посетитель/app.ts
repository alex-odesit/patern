interface ProjectElement{
   beWritten(developer:Developer):void
}

interface Developer{
   createClass(projectClass:ProjectClass):void
   createBase(dataBase:DataBase):void
   createTest(test:Test):void
}

class ProjectClass implements ProjectElement{
   public beWritten(developer: Developer): void {
      developer.createClass(this)
   }
}

class DataBase implements ProjectElement{
   public beWritten(developer: Developer): void {
      developer.createBase(this)
   }
}

class Test implements ProjectElement{
   public beWritten(developer: Developer): void {
      developer.createTest(this)
   }
}

class Project implements ProjectElement{

   projectElments:ProjectElement[]=[]

   constructor(){
      this.projectElments.push(new ProjectClass())
      this.projectElments.push(new DataBase())
      this.projectElments.push(new Test())
   }

   public beWritten(developer: Developer): void {
       for(let item of this.projectElments){
         item.beWritten(developer)
       }
   }
}

class Junior implements Developer{
   public createClass(projectClass: ProjectClass): void {
       console.log('Пишет плохой код');
   }
   public createBase(dataBase: DataBase): void {
       console.log('Роняет базу данных');
   }
   public createTest(test: Test): void {
       console.log('Плохо тестирует');
   }
}

class Senior implements Developer{
   public createClass(projectClass: ProjectClass): void {
       console.log('Пишет качественный код')
   }
   public createBase(dataBase: DataBase): void {
       console.log('Подымает базу данных')
   }
   public createTest(test: Test): void {
       console.log('Хорошо тестирует')
   }
}


let senior:Developer = new Senior()
let junior:Developer = new Junior()

let project:Project = new Project()

console.log('Работает junior');
project.beWritten(junior)
console.log('\n===================\n');
console.log('Работает senior');
project.beWritten(senior)