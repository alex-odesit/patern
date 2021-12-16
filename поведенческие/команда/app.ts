class Database {
   public insert():void{
      console.log('Insert record');
   }
   public update():void{
      console.log('Update record');
   }
   public delete():void{
      console.log('Delete record');
   }
}

interface Command{
   execute():void
}



class InsertCommand implements Command {
   database:Database

   constructor(database:Database){
      this.database = database
   }

   execute(): void {
      this.database.insert()
   }
}



class UpdateCommand implements Command {
   database:Database

   constructor(database:Database){
      this.database = database
   }

   execute(): void {
      this.database.update()
   }
}



class DeleteCommand implements Command {
   database:Database

   constructor(database:Database){
      this.database = database
   }

   execute(): void {
      this.database.delete()
   }
}

class Developer {
   private insert:Command
   private update:Command
   private deletes:Command

   constructor(insert:Command, update:Command, deletes:Command) {
      this.insert = insert
      this.deletes = deletes
      this.update = update
   }
   public insertRecord():void{
      this.insert.execute()
   }
   public deleteRecord():void{
      this.deletes.execute()
   }
   public updateRecord():void{
      this.update.execute()
   }
}

let database:Database = new Database();
let developer:Developer = new Developer(
   new InsertCommand(database),
   new UpdateCommand(database),
   new DeleteCommand(database)
);

developer.deleteRecord();
developer.insertRecord();
developer.updateRecord();