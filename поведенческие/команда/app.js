class Database {
    insert() {
        console.log('Insert record');
    }
    update() {
        console.log('Update record');
    }
    delete() {
        console.log('Delete record');
    }
}
class InsertCommand {
    constructor(database) {
        this.database = database;
    }
    execute() {
        this.database.insert();
    }
}
class UpdateCommand {
    constructor(database) {
        this.database = database;
    }
    execute() {
        this.database.update();
    }
}
class DeleteCommand {
    constructor(database) {
        this.database = database;
    }
    execute() {
        this.database.delete();
    }
}
class Developer {
    constructor(insert, update, deletes) {
        this.insert = insert;
        this.deletes = deletes;
        this.update = update;
    }
    insertRecord() {
        this.insert.execute();
    }
    deleteRecord() {
        this.deletes.execute();
    }
    updateRecord() {
        this.update.execute();
    }
}
let database = new Database();
let developer = new Developer(new InsertCommand(database), new UpdateCommand(database), new DeleteCommand(database));
developer.deleteRecord();
developer.insertRecord();
developer.updateRecord();
