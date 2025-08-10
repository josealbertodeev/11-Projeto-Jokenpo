const resultadoDoJogo = document.querySelector('.resultado-do-jogo');
const pontuacaoJogador = document.querySelector('.pontuacao-jogador span');
const pontuacaoIa = document.querySelector('.pontuacao-ia span');

let pontuacaoDoJogador = 0;
let pontuacaoDaIa = 0;
const escolhaUsuario = (escolhaDoUsuario) => {
    jogarJokenpo(escolhaDoUsuario, escolhaIa());
}

const escolhaIa = () => {
    const escolhasDaIa = ['pedra', 'papel', 'tesoura'];
    const escolhaAleatoria = Math.floor(Math.random() * 3);
    return escolhasDaIa[escolhaAleatoria];
}

const jogarJokenpo = (jogador, ia) => {
    console.log(`jogador: ${jogador} - ia: ${ia}`);

    if (jogador === ia) {
        resultadoDoJogo.innerHTML = 'Empate';

    } else if (jogador === 'pedra' && ia === 'tesoura' || jogador === 'tesoura' && ia === 'papel' || jogador === 'papel' && ia === 'pedra') {

        resultadoDoJogo.innerHTML = 'Você Ganhou';
        pontuacaoDoJogador++;
        pontuacaoJogador.innerHTML = pontuacaoDoJogador;

    } else {
        
        resultadoDoJogo.innerHTML = 'IA Ganhou';
        pontuacaoDaIa++;
        pontuacaoIa.innerHTML = pontuacaoDaIa;
    }

}

