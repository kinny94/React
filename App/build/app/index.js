let call = () => {
     let secret = "ES6 Rocks";
     let reveal = () => {
        console.log(secret);
     }
     return reveal;
}
 
call(); 
let unveil = call();
unveil();