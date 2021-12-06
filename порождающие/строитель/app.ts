class Contact{
    private name:string
    private surname:string
    private mail:string
    private phone:number
    private adres:string

    public constructor(contactBuilder:ContactBuilder){
        this.name = contactBuilder.getName()
        this.surname = contactBuilder.getSurname()
        this.mail = contactBuilder.getMail()
        this.phone = contactBuilder.getPhone()
        this.adres = contactBuilder.getAdres()
    }
}

class ContactBuilder{
    private name:string
    private surname:string
    private mail:string
    private phone:number
    private adres:string

    public nameChange(name:string):ContactBuilder{
        this.name = name
        return this
    }
    public surnameChange(surname:string):ContactBuilder{
        this.surname = surname
        return this
    }
    public mailChange(mail:string):ContactBuilder{
        this.mail = mail
        return this
    }
    public phoneChange(phone:number):ContactBuilder{
        this.phone = phone
        return this
    }
    public adresChange(adress:string):ContactBuilder{
        this.adres = adress
        return this
    }

    public getName():string{
        return this.name
    }
    public getSurname():string{
        return this.surname
    }
    public getMail():string{
        return this.mail
    }
    public getPhone():number{
        return this.phone
    }
    public getAdres():string{
        return this.adres
    }
    public build():Contact{
        return new Contact(this)
    }
}  

let person1:Contact = new ContactBuilder()
                    .nameChange('Sasha')
                    .surnameChange('Dmitriev')
                    .mailChange('sasha.dmitriev.9898@gmail.com')
                    .phoneChange(09530)
                    .adresChange('Заднепровского')
                    .build();
let person2:Contact = new ContactBuilder()
                    .nameChange('Oleg')
                    .surnameChange('Ivanov')
                    .mailChange('oleg.92@gmail.com')
                    .phoneChange(095368520)
                    .adresChange('Кустанайская')
                    .build();

console.log(person1);
console.log(person2);