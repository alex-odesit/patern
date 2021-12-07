class Job{
    public progressJob():void{
        console.log('Job in a progress');
    }
    public stopJob():void{
        console.log('Stop job');
    }
}

class Tracker{
    private condition:boolean

    public getCondition():boolean{
        return this.condition
    }
    public startSprint():void{
        console.log('Sprint is active');
        this.condition = true
    }
    public finishSprint():void{
        console.log('Sprint is not active');
        this.condition = false
    }
}

class Developer{
    public getDeveloper(tracker:Tracker):void{
        if(tracker.getCondition){
            console.log('Developer solving problems');
        }else{
            console.log('Developer relaxing');
        }
    }
}

class Facade{
    private job:Job = new Job()
    private developer:Developer = new Developer()
    private tracker:Tracker = new Tracker()

    public solveProblems():void{
        this.job.progressJob()
        this.tracker.startSprint()
        this.developer.getDeveloper(this.tracker)
    }

    public stopSolveProblems():void{
        this.job.stopJob()
        this.tracker.finishSprint()
        this.developer.getDeveloper(this.tracker)
    }
}

let facade:Facade = new Facade();
facade.solveProblems()
facade.stopSolveProblems()