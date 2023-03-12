function valida(array, num) {

    try{
        if(!array && !num) throw new ReferenceError("Cadê a porra dos parametros");

        if(typeof array !== 'object') throw new TypeError("Cadê a porra dos objcts");

        if(typeof num !== 'number') throw new TypeError("Cadê a porra dos numbers");

        if(array.length !== num) throw new RangeError("Tamanho do CARALHOOOOOO");
    
        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("ReferenceError");
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log("TypeError");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("RangeError");
            console.log(e.message); 
        } else {
            console.log("deu merda" + e);
        }
    }    
}

console.log(valida());
console.log("\n");
console.log(valida(5, 5));
console.log("\n");
console.log(valida([], 'a'));
console.log("\n");
console.log(valida([], 5));
console.log("\n");
console.log(valida([1, 2], 2));