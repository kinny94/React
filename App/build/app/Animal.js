class Animal{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    hello(){
        console.log(`H1, I am ${this.name}`);
    }
}

let king = new Animal("Muffasa", 4.5 );
king.hello();
console.log(king);
export default Animal;