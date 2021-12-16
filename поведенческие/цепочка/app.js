class Notifier {
    constructor(priority) {
        this.priority = priority;
    }
    setNextNotifier(nextNotifier) {
        this.nextNotifier = nextNotifier;
    }
    notifireManager(message, level) {
        if (level >= this.priority) {
            this.write(message);
        }
        if (this.nextNotifier != null) {
            this.nextNotifier.notifireManager(message, level);
        }
    }
}
class Priority {
}
Priority.ROUTINE = 1;
Priority.IMPORTENT = 2;
Priority.ASAP = 3;
class SimpleReportNotifire extends Notifier {
    constructor(priority) {
        super(priority);
    }
    write(message) {
        console.log('Notifire using system report: ' + message);
    }
}
class EmailNotifire extends Notifier {
    constructor(priority) {
        super(priority);
    }
    write(message) {
        console.log('Sending email: ' + message);
    }
}
class SMSNotifire extends Notifier {
    constructor(priority) {
        super(priority);
    }
    write(message) {
        console.log('Sending SMS to manager: ' + message);
    }
}
let reportNotifire = new SimpleReportNotifire(Priority.ROUTINE);
let emailNotifire = new EmailNotifire(Priority.IMPORTENT);
let smsNotifire = new SMSNotifire(Priority.ASAP);
reportNotifire.setNextNotifier(emailNotifire);
emailNotifire.setNextNotifier(smsNotifire);
reportNotifire.notifireManager('Everything is OK', Priority.ROUTINE);
reportNotifire.notifireManager('Something went wrong', Priority.IMPORTENT);
reportNotifire.notifireManager('Все плохо', Priority.ASAP);
