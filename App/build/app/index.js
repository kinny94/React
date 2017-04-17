const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h);