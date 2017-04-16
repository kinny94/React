import Animal from './Animal';

class Lion extends Animal{
    constructor(name, height, color){
        super(name, height);    //to take from the parent 
        this.color = color;
    }

    hello(){
        console.log(`Hello, I am in inherited class. I am ${this.name}`);
    }
} 

let son = new Lion("Simba", 2, "golden");
son.hello();