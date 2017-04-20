let p = new Promise((resolve, reject) => {
    reject('Rejected Promise ');
}).then((response) => {
    console.log(response);
}).catch((err)=> {
    console.log("Error");
});s

let x = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved Promise'), 3000);
}).then((response) => {
    console.log("Response");
}).catch((err) => {
    console.log(err);
}); 