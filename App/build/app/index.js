function Wizard(name, house, pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.read = () => `I'm ${this.name} from ${this.house}`;
}

Wizard.prototype.pet_name;
Wizard.prototype.info = function() {
    console.log(`I have a ${this.pet} name ${this.pet_name}`)
};

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry);
console.log(harry.read()); 
console.log(harry.info());