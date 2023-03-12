function filtraPrimos(array) {
    return array.filter(callback);
}

function callback(item) {
    for (let i = 2; i < item; i++)
      if (item % i === 0) {
        return false;
      }
    return item > 1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 22, 29, 33, 44, 55, 61, 223, 224];

console.log(filtraPrimos(array));
