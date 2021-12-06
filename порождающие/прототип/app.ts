interface Prototype{
   clone()
}

class Proto implements Prototype{
   name:string = 'Alex'
   age:number = 19
   
   clone():this{
      return Object.assign({},this)
   }
}

let main = new Proto();
let proto1 = main.clone();
proto1.name = 'Danya';
console.log(main);
console.log(proto1);