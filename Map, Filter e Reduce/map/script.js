const maca = {
    value: 2
}

const laranja = {
    value: 3
}

function mapComThis(array, thisArg) {
    return array.map(function(item) {
       return item * this.value 
    }, thisArg);
}

const num = [1, 2, 3, 4, 5];

console.log('this -> maça ', mapComThis(num, maca));
console.log('this -> laranja ', mapComThis(num, laranja));

function mapSemThis(array) {
    return array.map(function(item) {
        return item * 2;
    });
}

console.log('sem this ', mapSemThis(num));