class Coding {
    justDoit() {
        console.log('Разработчик пишет код....');
    }
}
class Reading {
    justDoit() {
        console.log('Разработчик читает книгу');
    }
}
class Sleeping {
    justDoit() {
        console.log('Разработчик спит...');
    }
}
class Developer {
    setActivity(activity) {
        this.activity = activity;
    }
    changeActivity() {
        if (this.activity instanceof Coding) {
            this.setActivity(new Reading);
        }
        else if (this.activity instanceof Reading) {
            this.setActivity(new Sleeping);
        }
        else if (this.activity instanceof Sleeping) {
            this.setActivity(new Coding);
        }
    }
    justDoit() {
        this.activity.justDoit();
    }
}
let developer = new Developer();
let activity = new Coding();
developer.setActivity(activity);
for (let i = 0; i < 8; i++) {
    developer.justDoit();
    developer.changeActivity();
}
