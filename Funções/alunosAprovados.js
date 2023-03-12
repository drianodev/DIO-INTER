const turma = [
    {
        nome: 'Adriano',
        nota: 10,
        tuma: '1A'
    },
    {
        nome: 'Sarah',
        nota: 10,
        tuma: '1A'
    },
    {
        nome: 'Mateus',
        nota: 4,
        tuma: '1B'
    }];

function alunos(array, media) {

    let aprovados = [];

    for(let i = 0; i < array.legth; i++) {

        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunos(turma, 5));