class Job {
    progressJob() {
        console.log('Job in a progress');
    }
    stopJob() {
        console.log('Stop job');
    }
}
class Tracker {
    getCondition() {
        return this.condition;
    }
    startSprint() {
        console.log('Sprint is active');
        this.condition = true;
    }
    finishSprint() {
        console.log('Sprint is not active');
        this.condition = false;
    }
}
class Developer {
    getDeveloper(tracker) {
        if (tracker.getCondition) {
            console.log('Developer solving problems');
        }
        else {
            console.log('Developer relaxing');
        }
    }
}
class Facade {
    constructor() {
        this.job = new Job();
        this.developer = new Developer();
        this.tracker = new Tracker();
    }
    solveProblems() {
        this.job.progressJob();
        this.tracker.startSprint();
        this.developer.getDeveloper(this.tracker);
    }
    stopSolveProblems() {
        this.job.stopJob();
        this.tracker.finishSprint();
        this.developer.getDeveloper(this.tracker);
    }
}
let facade = new Facade();
facade.solveProblems();
facade.stopSolveProblems();
