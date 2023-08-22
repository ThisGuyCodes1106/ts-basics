interface Person {
    readonly id: number
    name: string,
    age: number,
    gamerTag?: string,
    sayHi: () => string; //a method that accepts 0 arguments and returns a string
    sayAge(): string; // other way of writting method
}

const stefan: Person = {
    id: 1001,
    name: "Stefan",
    age: 30,
    gamerTag: "SpartanD215",
    sayHi: () => {
        return `Hola, mi nombre es ${stefan.name}`
    },
    sayAge() {
        return `Tengo ${stefan.age} anos`
    }
}


interface Dog {
    name: string,
    age: number,
    bark(): string;
}

interface ServiceDog extends Dog {
    job: string;
}

const loki: ServiceDog = {
    name: "Loki",
    age: 4.5,
    bark() {
        return "Woof!"
    },
    job: "Bomb Disposal"
}