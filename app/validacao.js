function verificaSeOChutePossuiUmValorValido(chute){
    const numero = + chute
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido </div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div> valor inválido: fale um número entre ${menorValor} e ${maiorValor}  </div>`
    }

    if (numero === numeroSecreto ) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }

    if (chute > numeroSecreto) {
        elementoChute.innerHTML += '<div> Um pouco mais </div>'        
    }

    if (chute < numeroSecreto) {
        elementoChute.innerHTML += '<div> Um pouco menos </div>'        
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor    
}