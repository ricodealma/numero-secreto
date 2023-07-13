window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const elementoChute = document.getElementById('chute')


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(params) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
        <span class="box">${chute}</span> 
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
}
