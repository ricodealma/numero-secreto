# 🤖 Jogo do Número Secreto - README 🕵️‍♂️

E aí, pessoal! Bem-vindos ao meu projeto do Jogo do Número Secreto. Aqui está um guia rápido para você entender o que estamos fazendo por aqui.

## ℹ️ Pontos Aprendidos

Antes de mergulharmos nas instruções e detalhes do projeto, deixe-me compartilhar com você alguns dos pontos que aprendi durante o desenvolvimento:

- Utilização de funções em JavaScript para organização do código.
- Manipulação do DOM para exibir mensagens e botões dinamicamente.
- Validação de entradas do usuário para garantir a jogabilidade correta.
- Uso da API SpeechRecognition para permitir comandos de voz. 🗣️
- Construção de página Básica HTML
- Estilização de conteúdos com CSS

## 🎮 Sobre o Projeto

Este projeto é uma prática para estudos em programação, onde desenvolvi um jogo simples do Número Secreto. O objetivo é adivinhar o número secreto gerado pelo computador e receber feedbacks sobre as tentativas.

## 📝 Instruções do Jogo

Para iniciar o jogo, você precisará seguir as seguintes instruções:

1. Digite um número válido no campo de chute ou use os comandos de voz para falar o número.
2. Seu chute deve estar dentro do intervalo permitido, que vai de 1 a 1000.
3. O jogo fornecerá feedbacks sobre seu chute, dizendo se o número secreto é maior ou menor.
4. Continue chutando até acertar o número secreto ou até decidir desistir. Você pode falar "Game Over"  para encerrar o jogo.
5. Se você acertar o número secreto, uma mensagem de parabéns será exibida. Caso contrário, você poderá tentar novamente ou encerrar o jogo.

Divirta-se e tente adivinhar o número secreto o mais rápido possível! 😄

## 🚀 Funções Principais

Aqui estão algumas das funções principais utilizadas no código do projeto:

### `verificaSeOChutePossuiUmValorValido(chute)`

Esta função verifica se o chute inserido é válido. Ela também lida com a finalização do jogo caso a palavra "Game Over" seja digitada.

### `chuteForInvalido(numero)`

Esta função verifica se o número é inválido, utilizando a função `Number.isNaN()`.

### `numeroForMaiorOuMenorQueOValorPermitido(numero)`

Esta função verifica se o número está fora do intervalo permitido.

### `onSpeak(e)`

Esta função é chamada quando o reconhecimento de voz é ativado. Ela recebe o chute falado pelo usuário e exibe-o na tela.

## 🎯 Intervalo do Número Secreto

O número secreto está dentro do intervalo de 1 a 1000. Esses são os limites que você precisa ter em mente ao tentar adivinhar o número correto.

## 🤫 Número Secreto

O número secreto é gerado aleatoriamente pelo computador a cada partida. Não se preocupe, não vou revelar o número aqui. 😉 Você terá que jogar para descobrir!

## 📢 Reconhecimento de Voz

O jogo usa comandos de voz. Para usá-lo, siga estas etapas:

1. Certifique-se de permitir o acesso ao microfone quando solicitado.
2. Comece a falar quando o jogo iniciar o reconhecimento de voz.
3. Diga o número que deseja chutar.
4. O jogo registrará sua fala e exibirá o chute na tela automaticamente.
5. Aguarde o feedback e continue jogando normalmente.

## 🔄 Reiniciar o Jogo

Se você quiser jogar novamente, basta clicar no botão "retry" que será exibido quando o jogo terminar. Isso irá recarregar a página e iniciar um novo jogo.

E é isso, pessoal! Agora você está pronto para mergulhar de cabeça no Jogo do Número Secreto. Espero que se divirtam bastante e aproveitem para aprimorar suas habilidades em programação.

Se tiverem alguma dúvida ou sugestão, fiquem à vontade para entrar em contato comigo. Até mais e boa sorte nas suas tentativas de adivinhar o número secreto! 🎉
