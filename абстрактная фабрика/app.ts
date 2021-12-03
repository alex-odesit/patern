interface Basic{
   getSallary();
}

class Junior implements Basic{
   getSallary(){
      return '500$';
   }
}
class Middle implements Basic{
   getSallary(){
      return '2000$';
   }
}
class Senior implements Basic{
   getSallary(){
      return '5000$';
   }
}

class PersonSpeciality{
   static getSpeciality(personSpeciality:string){
      switch(personSpeciality){
         case 'Junior':
            return new Junior();
         case 'Middle':
            return new Middle();
         case 'Senior':
            return new Senior();
      }
   }
}

class GetSallaryPerson{
   GetSallaryByPerson(userType:string){
      return PersonSpeciality.getSpeciality(userType).getSallary();
   }
}

let user1 = new GetSallaryPerson();
let user2 = new GetSallaryPerson();
let user3 = new GetSallaryPerson();

console.log(user1.GetSallaryByPerson('Junior'));
console.log(user1.GetSallaryByPerson('Senior'));
console.log(user1.GetSallaryByPerson('Middle'));