function calcule(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Sarah",
    idade: 20
};

const pessoa2 = {
    nome: "Adriano",
    idade: 19
};

console.log(calcule.call(pessoa1, 10));
console.log(calcule.call(pessoa2, 10));

console.log(calcule.apply(pessoa1, [10]));
console.log(calcule.apply(pessoa2, [10]));