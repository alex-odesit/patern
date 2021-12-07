interface Developer{
    makeJob():string
}
class JSDeveloper implements Developer{
    makeJob():string{
        return 'JS developer writes code'
    }
}



class Decorator implements Developer{
    private developer:Developer
    
    constructor(developer:Developer){
        this.developer = developer
    }
    makeJob():string{
        return this.developer.makeJob()
    }
}

class SeniorJSDeveloper extends Decorator{
    constructor(developer:Developer){
        super(developer)
    }
    public drinkCofee():string{
        return ' and drink coffe'
    }
    public makeJob():string{
        return super.makeJob()+this.drinkCofee()
    }
}

class TeamLeadJSDeveloper extends Decorator{
    constructor(developer:Decorator){
        super(developer)
    }
    public sendWork():string{
        return ' then sends his work'
    }
    public makeJob():string{
        return super.makeJob()+this.sendWork()
    }
}

let developer1:Developer = new TeamLeadJSDeveloper(new SeniorJSDeveloper(new JSDeveloper));
console.log(developer1.makeJob());