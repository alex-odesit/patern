class Xiaomy {
    createPhone() {
        console.log('Заказан телефон с Китая');
    }
}
class Asus {
    createLaptop() {
        console.log('Заказан ноутбук с Китая');
    }
}
class IPhone {
    createPhone() {
        console.log('Заказан телефон с США');
    }
}
class MacBook {
    createLaptop() {
        console.log('Заказан ноутбук с США');
    }
}
class ChinaProducts {
    getPhone() {
        return new Xiaomy();
    }
    getLaptop() {
        return new Asus();
    }
}
class USAProducts {
    getPhone() {
        return new IPhone();
    }
    getLaptop() {
        return new MacBook();
    }
}
class ProductCountry {
    getCountry(country) {
        switch (country) {
            case 'China':
                return new ChinaProducts();
            case 'USA':
                return new USAProducts();
        }
    }
}
let country = new ProductCountry();
let usa = country.getCountry('USA');
let china = country.getCountry('China');
usa.getLaptop().createLaptop();
usa.getPhone().createPhone();
china.getLaptop().createLaptop();
china.getPhone().createPhone();
