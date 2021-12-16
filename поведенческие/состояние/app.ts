interface Activity{
   justDoit():void
}

class Coding implements Activity{
   public justDoit(): void {
       console.log('Разработчик пишет код....');
   }
}

class Reading implements Activity{
   public justDoit(): void {
       console.log('Разработчик читает книгу');
   }
}

class Sleeping implements Activity{
   public justDoit(): void {
       console.log('Разработчик спит...');
   }
}

class Developer {
   activity:Activity

   public setActivity(activity:Activity):void{
      this.activity = activity
   }
    public changeActivity():void{
       if(this.activity instanceof Coding){
          this.setActivity(new Reading)
       } else if(this.activity instanceof Reading){
          this.setActivity(new Sleeping)
       } else if(this.activity instanceof Sleeping){
          this.setActivity(new Coding)
       }
    }
    public justDoit():void{
       this.activity.justDoit()
    }
}

let developer:Developer = new Developer()
let activity:Activity = new Coding()
developer.setActivity(activity)

for(let i=0; i<8;i++){
   developer.justDoit()
   developer.changeActivity()
}