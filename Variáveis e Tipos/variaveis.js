numberOne = 1;

console.log(numberOne + 2);

var numberOne; // Escopo global

// numberTwo = 2;

// console.log(numberTwo + 2);

let numberTwo = 2; // Escopo local

console.log(numberTwo);


var firstName = 'João ';
var lastName = 'Silva';

console.log(firstName + lastName);

if(firstName === 'João ') {
    var firstName = 'Pedro ';
    let lastName = 'Henrique';

    console.log(firstName + lastName);
}

console.log(firstName + lastName);