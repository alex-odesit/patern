class Singleton{
   private static instance:Singleton;
   public randomNUmber
   
   private constructor(){
      this.randomNUmber = Math.random()
   }
   public static singletonGo(){
      if(!Singleton.instance){
         Singleton.instance = new Singleton();
      }
      return Singleton.instance;
   }
}

console.log(Singleton.singletonGo().randomNUmber);
console.log(Singleton.singletonGo().randomNUmber);
console.log(Singleton.singletonGo().randomNUmber);
