var jogadorNome;
var computadorEscolha = 0
var jogadorEscolha = 0
var jogadorPontos = 0
var computadorPontos = 0


//exibe mensagem no console
function mensagem(texto){
    document.getElementById('mensagem').innerHTML = texto;
}

//Define o nome do Jogador na tela 
function definirNomeJogador(nome){
    document.getElementById('jogador-nome').innerHTML = nome
}

//sortea entre dois números
function sortear(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calcula e retorna quem ganhou
// 0 = empate
// 1 = jogador
// 2 = computador
function calcularEscolha  (jogador, computador){
    if (jogador == 1 && computador == 1){
        return 0;
    }
    else if (jogador == 1 && computador == 2){
        return 2;
    }
    else if (jogador == 1 && computador == 3){
        return 1;
    }
    else if (jogador == 2 && computador == 1){
        return 1;
    }
    else if (jogador == 2 && computador == 2){
        return 0;
    }
    else if (jogador == 2 && computador == 3){
        return 2;
    }
    else if (jogador == 3 && computador == 1){
        return 2;
    }
    else if (jogador == 3 && computador == 2){
        return 1;
    }
    else if (jogador == 3 && computador == 3){
        return 0;
    }
}

//soma de pontos do jogador
function somarPontoJogador(){
    jogadorPontos ++;
}
//soma de pontos do computador
function somarPontoComputador(){
    computadorPontos ++;
}

//adiciona a classe selecionado
function selecionar (tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

//Remove a classe selecionada
function deselecionar (tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}



// Escolhe a jogada do usuário
// 1 = pedra
// 2 = papel
// 3 = tesoura
function jogo(escolha) {
    jogadorEscolha = escolha; 
    selecionar('jogador',  jogadorEscolha);

    //sortear a jogada do computador
    computadorEscolha = sortear(1, 3);
    selecionar('computador',  computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if (ganhador == 0 ) {
        mensagem('Empate');
    }
    else if (ganhador == 1 ) {
        mensagem('Ponto para ' + jogadorNome);
        somarPontoJogador();
        document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
    }
    else if (ganhador == 2 ) {
        mensagem('Ponto para o Computador');
        somarPontoComputador();
        document.getElementById('computador-pontos').innerHTML = computadorPontos;
    }
    
    setTimeout(function(){
        deselecionar('jogador',  jogadorEscolha);
        deselecionar('computador', computadorEscolha);

        mensagem(jogadorNome + ' escolha uma opção acima....');
    }, 2500);

}

document.getElementById('jogador-escolha-1').onclick = function(){ jogo(1);};
document.getElementById('jogador-escolha-2').onclick = function(){ jogo(2);};
document.getElementById('jogador-escolha-3').onclick = function(){ jogo(3);};

//registra nome do jogador
jogadorNome = prompt('Qual é o seu nome? ');

//insere nome do jogador nos campos nome usuário + Tela de bem-vindo
mensagem('Bem-Vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...')
definirNomeJogador(jogadorNome);