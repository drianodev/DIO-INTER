function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        console.log(`${prev} + ${current}`);
        return prev + current;
    }, 0); // valor inicial é 0 mas pode ser nenhum
}

const array = [1, 2, 3, 4, 5];

console.log(somaNumeros(array));

const list = [
    {
        name: 'pao',
        preco: 30
    },
    {
        name: 'arro',
        preco: 70
    },
    {
        name: 'sao',
        preco: 20
    },
    {
        name: 'bolo',
        preco: 10
    }
];

const saldo1 = 200;
const saldo2 = 20;

function calculaSaldo(saldo, lista) {
    return lista.reduce(function(prev, current) {
        console.log(`${prev} - ${current.preco}`);
        return prev - current.preco;
    }, saldo);
}

console.log(calculaSaldo(saldo1, list));
console.log(calculaSaldo(saldo2, list));