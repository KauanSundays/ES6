// Generics com o draft da NFL.

interface Jogador {
  nome: string;
  posicao: string;
}

interface EscolhaDraft<T> {
  time: string;
  atleta: T;
}

function anunciarEscolha<T extends Jogador> (escolha: EscolhaDraft<T>) {
    console.log(`O time ${escolha.time} escolheu o jogador: ${escolha.atleta.nome}`);
}

const pick1: EscolhaDraft<Jogador> = {
    time: "texas",
    atleta: {nome: "stround", posicao: "QB"}
}

anunciarEscolha(pick1)