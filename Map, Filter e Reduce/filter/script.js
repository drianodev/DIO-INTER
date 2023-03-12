function filtraPares(array) {
    return array.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 33, 44, 55];

console.log(filtraPares(array));