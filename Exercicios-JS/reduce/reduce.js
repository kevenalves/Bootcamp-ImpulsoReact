function somaNumeros(arr){
    return arr.reduce((prev, current) => {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0 /* Valor inicial nao precisa ser definido se for 0 */);
}



const arr = [1, 2];
console.log(somaNumeros(arr));