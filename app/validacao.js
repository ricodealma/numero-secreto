function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = + chute;
  
    if (Number.isNaN(numero)) {
      if (chute.toLowerCase() === 'game over') {
        exibirResultado('GAME OVER', numeroSecreto);
      } else {
        adicionarMensagem('Valor inválido');
      }
      return;
    }
  
    if (numero > maiorValor || numero < menorValor) {
      adicionarMensagem(`Valor inválido: fale um número entre ${menorValor} e ${maiorValor}`);
      return;
    }
  
    if (numero === numeroSecreto) {
      exibirResultado('Você acertou!', numeroSecreto);
    } else if (chute > numeroSecreto) {
      adicionarMensagem('O número secreto é menor <i class="fa-solid fa-down-long"></i>');
    } else {
      adicionarMensagem('O número secreto é maior <i class="fa-solid fa-up-long"></i>');
    }
  }
  
  function exibirResultado(titulo, numeroSecreto) {
    document.body.innerHTML = `
      <h2>${titulo}</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="jogar-novamente" class="btn-jogar">retry</button>
    `;
  }
  
  function adicionarMensagem(mensagem) {
    elementoChute.innerHTML += `<div>${mensagem}</div>`;
  }
  
  document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
      window.location.reload();
    }
  });
  