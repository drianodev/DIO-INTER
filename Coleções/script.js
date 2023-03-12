function getAdmins(map) {

    let admins = [];

    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Adriano', 'Admin');
usuarios.set('Sarah', 'Admin');
usuarios.set('Alef', 'User');

console.log(getAdmins(usuarios));


const array = [30, 30, 40, 5, 333, 2049, 3034];

function unico(array) {
    const mySet = new Set(array);

    return [...mySet];
}

console.log(unico(array));