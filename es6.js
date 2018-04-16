// Let and const
// With let the variable are block scoped, they won't be accessible outside the containing braces.

if( true ){
    var name = "Max";
}  

console.log( name );

const x = 27;
// you cannot change the value of a const but if,

const arr = [1, 2, 4];
arr.push( 44 );
// this will work, becuase const stores the reference to that variable not the value

//Hoisting with let and const doesn't work. we have to declare them before initializing them or using them.

//spread operator

let numbers = [1,2,3,4,5];

console.log( Math.max(...numbers));

function add(a,b) {
    if (arguments.length === 1) {
        return function(b2) { // You could call this arg `b` as well if you like,
        return a + b2;      // it would shadow (hide, supercede) the one above
    };
}
return a + b;
}

console.log( add( 10, 10 ));
console.log( add(10)(10));