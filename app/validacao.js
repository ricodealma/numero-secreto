function verificaSeOChutePossuiUmValorValido(chute){
    const numero = + chute
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido </div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div> valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}  </div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor    
}