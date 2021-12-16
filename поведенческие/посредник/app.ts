interface Chat{
   sendMessage(message:string,user:Object):void
}

interface User{
   sendMessage(message:string):void

   getMessage(message:string):void
}

class Admin implements User{
   chat:Chat
   name:string
   constructor(chat:Chat, name:string) {
      this.chat = chat
      this.name = name
   }

   public getName():string{
      return this.name
   }
   public setName(name:string){
      this.name = name
   }

   public sendMessage(message: string): void {
       this.chat.sendMessage(message,this)
   }
   public getMessage(message: string): void {
       console.log(this.name+' получает сообщение'+message);
   }
}

class UserItem implements User{
   chat:Chat
   name:string
   constructor(chat:Chat, name:string) {
      this.chat = chat
      this.name = name
   }

   public getName():string{
      return this.name
   }
   public setName(name:string){
      this.name = name
   }
   public sendMessage(message: string): void {
       this.chat.sendMessage(message,this)
   }
   public getMessage(message: string): void {
       console.log(this.name+' получает сообщение'+message);
   }
}

class SimpleTextChat implements Chat{
   admin:User
   users:User[] = []

   public setAdmin(admin:Admin):void{
      this.admin = admin
   }
   public addUser(user:User):void{
      this.users.push(user)
   }

   public sendMessage(message: string, user: Object): void {
       for(let u of this.users){
         if(u!=user){
            u.getMessage(message)
         }
      }
      this.admin.getMessage(message)
   }
}

let chat:SimpleTextChat = new SimpleTextChat();

let admin:Admin = new Admin(chat,'Admin');
let user1:User = new UserItem(chat,'User1');
let user2:User = new UserItem(chat,'User2');

chat.setAdmin(admin);
chat.addUser(user1);
chat.addUser(user2);

user1.sendMessage('Привет, я первый пользователь');
admin.sendMessage('Привет, я администратор этого чата')