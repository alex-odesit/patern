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
    public justDoit():void{
       this.activity.justDoit()
    }
}

let developer:Developer = new Developer()

developer.setActivity(new Coding())
developer.justDoit()

developer.setActivity(new Reading())
developer.justDoit()

developer.setActivity(new Sleeping())
developer.justDoit()

developer.setActivity(new Coding())
developer.justDoit()
