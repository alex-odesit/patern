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
    justDoit() {
        this.activity.justDoit();
    }
}
let developer = new Developer();
developer.setActivity(new Coding());
developer.justDoit();
developer.setActivity(new Reading());
developer.justDoit();
developer.setActivity(new Sleeping());
developer.justDoit();
developer.setActivity(new Coding());
developer.justDoit();
