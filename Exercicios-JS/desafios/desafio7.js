const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr)

    return [...mySet];
    //Com o operador spread neste caso se torna um novo array, sem ele seria um 'set' dentro do array.
}

console.log(valoresUnicos(meuArray));