let NumerosSorteados = [];
let MaxNumSecreto = Number(20);
let NumeroSecreto = CriarNumeroSecreto();
console.log(NumeroSecreto)
DigiteNome()
MensagensNaTela()
let tentativas = 1

function DigiteNome() {
    return nome = prompt('Digite seu Nome para Começarmos:')
}

function ExibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};


function MensagensNaTela() {
    ExibirNaTela('h1', `Bem vindo(a) ao Jogo do markin ${nome}`);
    ExibirNaTela('p', `Advinhe um número entre 1 a ${MaxNumSecreto}`);
}



function verificarChute() {
    let Chute = document.querySelector('input').value;   
    if(Chute == NumeroSecreto) {
    ExibirNaTela('h1', `Parabéns ${nome}`);
let sintasetentativa = Number(tentativas) > 1? `Tentativas` : "Tentativa"
    ExibirNaTela('p', `Você acertou o Número Secreto (${NumeroSecreto}) em ${tentativas} ${sintasetentativa}` )
    document.getElementById("reiniciar").removeAttribute('disabled');
}
else{ if(Chute == 13){
    ExibirNaTela('h1', `${nome} Faz o L?`);
ExibirNaTela('p', `Meu jogo não gosta de política, então sem dicas essa rodada:`);
}else{ 
    if(Chute == 22) {
        ExibirNaTela('h1', `${nome} Bolsonarista?`);
ExibirNaTela('p', `Meu jogo não gosta de política, então sem dicas essa rodada:`);
    } else {if(Chute > NumeroSecreto) {
        ExibirNaTela('h1', `Errou ${nome}`);
ExibirNaTela('p', `O número é Menor que (${Chute})`);
    }
    else{
        ExibirNaTela('h1', `Errou ${nome}`);
ExibirNaTela('p', `O número é Maior que (${Chute})`)
    } 

}}
}
    
LimparCampo('input')
return tentativas++
}

function CriarNumeroSecreto() {
    let NumeroEscolhidoPelaMaquina = parseInt(Math.random()*MaxNumSecreto + 1);
    if(NumerosSorteados.length == 2 ) {
        NumerosSorteados.shift()
    }
    if(NumerosSorteados.includes(NumeroEscolhidoPelaMaquina)) {
        return CriarNumeroSecreto();
    }else{
        NumerosSorteados.push(NumeroEscolhidoPelaMaquina)
        
    }return NumeroEscolhidoPelaMaquina
    
}

function LimparCampo(tag) {
    campo = document.querySelector(tag);
    campo.value = '';
}

function BotaoReiniciar() {
    NumeroSecreto = CriarNumeroSecreto();
    console.log(NumeroSecreto);
    console.log(NumerosSorteados)
   DigiteNome()
    MensagensNaTela();
    LimparCampo('input');
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}