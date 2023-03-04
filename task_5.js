class Electro {
    constructor(name) {
        this.turnOn = "Yes",
            this.name = name
    }
    getPower(power) {
        console.log(`Power is ${power} W`)
    }
}


class ElectroType {
    constructor(name, simple) {
        this.name = name,
            this.type = type
    }
}

ElectroType.prototype = new Electro()

const lamp = new ElectroType('lamp', 'simple');
const PC = new ElectroType('PC', 'advanced');

lamp.getPower(10);
PC.getPower(150);

console.log(lamp);
console.log(PC);