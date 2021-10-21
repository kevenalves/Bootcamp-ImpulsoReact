function concat(n1, n2) {

    let primeiraFrase = comparaNumeros(n1, n2);
    let segundaFrase = maiorOumenor10e20(n1, n2);

    return primeiraFrase + segundaFrase
    
}

function comparaNumeros(n1, n2) {
    let saoIguais = n1 === n2 
   
    if(saoIguais){
       saoIguais = "sao"
    } else {
        saoIguais = 'nao sao'
    }

    const primeiraFrase = `Os numeros ${n1} e ${n2} ${saoIguais} iguais. `
    return primeiraFrase
}


function maiorOumenor10e20(n1, n2){
    let soma = n1 + n2
    if(soma > 10){
        var maiorOumenor10 = "maior"
    } else { var maiorOumenor10 = "menor"}

    if (soma > 20) {
        var maiorOuMenor20 = "maior"
    } else { var maiorOuMenor20 = "menor"}

    const segundaFrase = `A soma dos numeros ${n1} e ${n2} e ${soma}, ele e ${maiorOumenor10} 10 e ${maiorOuMenor20} do que 20.`
    return segundaFrase
}


console.log(concat(2, 2))