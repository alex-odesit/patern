abstract class Notifier {
   private priority:number
   private nextNotifier:Notifier
   
   constructor(priority:number) {
      this.priority = priority
   }

   public setNextNotifier(nextNotifier:Notifier):void{
      this.nextNotifier = nextNotifier;
   }

   notifireManager(message:string,level:number):void{
      if(level>=this.priority){
         this.write(message)
      }
      if(this.nextNotifier != null){
         this.nextNotifier.notifireManager(message,level)
      }
   }

   public abstract write(message:string):void
}

class Priority {
   public static ROUTINE:number = 1
   public static IMPORTENT:number = 2
   public static ASAP:number = 3
}

class SimpleReportNotifire extends Notifier {

   constructor(priority:number) {
      super(priority)
   }

   public write(message: string): void {
       console.log('Notifire using system report: ' + message);
   }
}

class EmailNotifire extends Notifier {

   constructor(priority:number) {
      super(priority)
   }

   public write(message: string): void {
       console.log('Sending email: ' + message);
   }
}

class SMSNotifire extends Notifier {
   constructor(priority:number) {
      super(priority)
   }

   public write(message: string): void {
       console.log('Sending SMS to manager: ' + message);
   }
}


let reportNotifire:Notifier = new SimpleReportNotifire(Priority.ROUTINE);
let emailNotifire:Notifier  = new EmailNotifire(Priority.IMPORTENT);
let smsNotifire:Notifier = new SMSNotifire(Priority.ASAP);

reportNotifire.setNextNotifier(emailNotifire);
emailNotifire.setNextNotifier(smsNotifire);

reportNotifire.notifireManager('Everything is OK', Priority.ROUTINE);
reportNotifire.notifireManager('Something went wrong', Priority.IMPORTENT);
reportNotifire.notifireManager('Все плохо',Priority.ASAP);




