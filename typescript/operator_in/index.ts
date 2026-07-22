// --- TIPOS ---
type AtletaNFL = {
  nome: string;
  posicao: string;
  touchdowns: number; // Propriedade exclusiva da NFL
};

type AtletaNBA = {
  nome: string;
  posicao: string;
  pontosPorJogo: number; // Propriedade exclusiva da NBA
};

type Atleta = AtletaNFL | AtletaNBA;

// --- DADOS PARA TESTAR ---
const atletasParaProcessar: Atleta[] = [
  { nome: "Patrick Mahomes", posicao: "QB", touchdowns: 38 },
  { nome: "LeBron James", posicao: "SF", pontosPorJogo: 25.7 },
  { nome: "Justin Jefferson", posicao: "WR", touchdowns: 10 },
  { nome: "Stephen Curry", posicao: "PG", pontosPorJogo: 26.4 }
];

// --- SEU DESAFIO ---
// Implemente esta função usando o operador 'in' para afunilar o tipo 'Atleta'.
// Se for AtletaNFL, retorne a string: "[NFL] <nome> (<posicao>) - <touchdowns> TDs"
// Se for AtletaNBA, retorne a string: "[NBA] <nome> (<posicao>) - <pontosPorJogo> PPJ"

function processarAtleta(atleta: Atleta): string {
  if ("touchdowns" in atleta) {
    return `[NFL] ${atleta.nome} (${atleta.posicao}) - ${atleta.touchdowns} TDs`;
  }

  if ("pontosPorJogo" in atleta) {
    return `[NBA] ${atleta.nome} (${atleta.posicao}) - ${atleta.pontosPorJogo} PPJ`;
  }

  return "Não identificado a liga do jogador"
}

// Execução para teste:
atletasParaProcessar.forEach((atleta) => {
  console.log(processarAtleta(atleta));
});
