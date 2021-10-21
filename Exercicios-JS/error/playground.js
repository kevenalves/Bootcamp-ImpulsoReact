function validaArray(arr, num){
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parametros!");

        if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo objeto.");
    
        if(typeof num !== 'number') throw new TypeError("O num precisa ser do tipo number.");
    
        if(arr.length !== num) throw new RangeError("Tamanho invalido!")

        return arr
    } catch (error) {
        if(error instanceof ReferenceError) {
            console.log("Este erro e um ReferenceError")
            console.log(error.message)
        } else if(error instanceof TypeError){
            console.log("Este erro e um TypeError")
            console.log(error.message)
        } else if (error instanceof RangeError) {
            console.log("Este erro e um RangeError")
            console.log(error.message)
        } else {
            console.log("Tipo de erro nao esperado: " + error)
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5))