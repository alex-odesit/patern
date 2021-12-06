interface Tank {
    name: string
    speed: number
}

class T34 implements Tank {
    name: string = 't-34';
    speed: number = 100;
}

class Matilda implements Tank {
    name: string = 'matilda';
    speed: number = 30;
}

class Helcot implements Tank {
    name: string = 'helcot';
    speed: number = 38;
}

console.log(`Танк:${new T34().name} Скорость:${new T34().speed}`);
console.log(`Танк:${new Matilda().name} Скорость:${new Matilda().speed}`);
console.log(`Танк:${new Helcot().name} Скорость:${new Helcot().speed}`);