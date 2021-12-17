interface Phone{
    createPhone():void
}

interface Laptop{
    createLaptop():void
}

interface Country{
    getPhone():Phone
    getLaptop():Laptop
}

class Xiaomy implements Phone{
    public createPhone(): void {
        console.log('Заказан телефон с Китая');
    }
}

class Asus implements Laptop{
    public createLaptop(): void {
        console.log('Заказан ноутбук с Китая');
    }
}

class IPhone implements Phone{
    public createPhone(): void {
        console.log('Заказан телефон с США');
    }
}

class MacBook implements Laptop{
    public createLaptop(): void {
        console.log('Заказан ноутбук с США');
    }
}

class ChinaProducts implements Country{
    getPhone():Phone{
        return new Xiaomy()
    }
    getLaptop():Laptop{
        return new Asus()
    }
}

class USAProducts implements Country{
    getPhone():Phone{
        return new IPhone()
    }
    getLaptop():Laptop{
        return new MacBook()
    }
}

class ProductCountry{
    public getCountry(country:string):Country{
        switch(country){
            case 'China':
                return new ChinaProducts()
            case 'USA':
                return new USAProducts()
        }
    }
}

let country:ProductCountry = new ProductCountry()
let usa:USAProducts = country.getCountry('USA')
let china:ChinaProducts = country.getCountry('China')

usa.getLaptop().createLaptop()
usa.getPhone().createPhone()

china.getLaptop().createLaptop()
china.getPhone().createPhone()