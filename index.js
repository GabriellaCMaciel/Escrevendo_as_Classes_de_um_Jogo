class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        if (this.type === "mago") {
            return "magia";
        }
        else if (this.type === "guerreiro") {
            return "espada";
        }
        else if (this.type === "monge") {
            return "artes marciais";
        }
        else if (this.type === "ninja") {
            return "shuriken";
        }
    }
}

let hero1 = new hero("Zhongli", 1000, "guerreiro")
let hero2 = new hero("Lisa", 27, "mago")
let hero3 = new hero("Endaiel", 10903, "monge")
let hero4 = new hero("Naruto", 36, "ninja")

console.log(`O ${hero1.type} atacou usando ${hero1.attack()}`);
console.log(`O ${hero2.type} atacou usando ${hero2.attack()}`);
console.log(`O ${hero3.type} atacou usando ${hero3.attack()}`);
console.log(`O ${hero4.type} atacou usando ${hero4.attack()}`);