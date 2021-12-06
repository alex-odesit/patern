class Contact {
    constructor(contactBuilder) {
        this.name = contactBuilder.getName();
        this.surname = contactBuilder.getSurname();
        this.mail = contactBuilder.getMail();
        this.phone = contactBuilder.getPhone();
        this.adres = contactBuilder.getAdres();
    }
}
class ContactBuilder {
    nameChange(name) {
        this.name = name;
        return this;
    }
    surnameChange(surname) {
        this.surname = surname;
        return this;
    }
    mailChange(mail) {
        this.mail = mail;
        return this;
    }
    phoneChange(phone) {
        this.phone = phone;
        return this;
    }
    adresChange(adress) {
        this.adres = adress;
        return this;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getMail() {
        return this.mail;
    }
    getPhone() {
        return this.phone;
    }
    getAdres() {
        return this.adres;
    }
    build() {
        return new Contact(this);
    }
}
let person1 = new ContactBuilder()
    .nameChange('Sasha')
    .surnameChange('Dmitriev')
    .mailChange('sasha.dmitriev.9898@gmail.com')
    .phoneChange(09530)
    .adresChange('Заднепровского')
    .build();
let person2 = new ContactBuilder()
    .nameChange('Oleg')
    .surnameChange('Ivanov')
    .mailChange('oleg.92@gmail.com')
    .phoneChange(095368520)
    .adresChange('Кустанайская')
    .build();
console.log(person1);
console.log(person2);
