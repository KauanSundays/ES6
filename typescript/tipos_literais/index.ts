// 1. Crie um Tipo Literal chamado 'PosicaoFutebol' que aceite APENAS: 'Goleiro', 'Zagueiro', 'MeioCampo' ou 'Atacante'.
// [Seu tipo aqui]

type PosicaoFutebol = 'Goleiro' | 'Zagueiro' | 'MeioCampo' |'Atacante';
// 2. Crie um Tipo Literal chamado 'StatusJogador' que aceite APENAS: 'Provavel', 'Duvida' ou 'Contundido'.
// [Seu tipo aqui]

type StatusJogador = 'Provavel' | 'Duvida' | 'Contundido'

interface Jogador {
    nome: string;
    posicao: PosicaoFutebol;
    status: StatusJogador;
}

// 3. Complete o objeto abaixo respeitando os tipos criados:
const novoJogador: Jogador = {
    nome: "Neymar Jr",
    posicao: "Atacante",
    status: "Provavel"
};

// 4. Crie uma função chamada 'atualizarStatus' que mude o status do jogador,
// mas que force o argumento do novo status a ser estritamente do tipo 'StatusJogador'.
function atualizarStatus(jogador: Jogador, novoStatus: StatusJogador): Jogador {
    jogador.status = novoStatus;
    return jogador;
}

// Teste o erro descomentando a linha abaixo após criar os tipos:
console.log(atualizarStatus(novoJogador, "Provavel"));
