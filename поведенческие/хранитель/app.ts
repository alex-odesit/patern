class Project {
   private version:string
   private date:Date

   public setVersionAndDate(version:string){
      this.version = version
      this.date = new Date()
   }

   public save():Save{
      return new Save(this.version,this.date)
   }
   public load(save:Save):void{
      this.version = save.getVersion()
      this.date = save.getDate()
   }
}

class Save {
   private version:string
   private date:Date

   constructor(version:string, date:Date){
      this.version = version
      this.date = date
   }

   public getDate():Date{
      return this.date
   }

   public getVersion():string{
      return this.version
   }
}

class Github {
   private save:Save

   public getSave():Save{
      return this.save
   }

   public setSave(save:Save):void{
      this.save = save
   }
}

let project:Project = new Project();
let gitGub:Github = new Github();

console.log('Создание нового объекта');
project.setVersionAndDate('Version 1.0');

console.log(project);

console.log('Сохранение этой версии на Github');
gitGub.setSave(project.save());

console.log('Создание проекта версии 1.1');

project.setVersionAndDate('Version 1.1')
console.log(project);

console.log('Что-то пошло не так, надо откатиться');
project.load(gitGub.getSave());
console.log(project);