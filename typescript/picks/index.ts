// 1. A interface base que você não deve alterar
interface AtletaCompleto {
  id: string;
  nome: string;
  idade: number;
  posicao: string;
  notaGeral: number; // Ex: 89, 95
  historicoLesoes: string[];
  valorContratoPretendido: number;
  universidadeOrigem: string;
}

// 2. CRIE SEU TIPO UTILIZANDO O 'Pick' AQUI:
type CardDraft = Pick<AtletaCompleto, 'nome' | 'posicao' | 'notaGeral'>; // <- Modifique esta linha


// 3. Aplique o tipo 'CardDraft' no parâmetro da função abaixo
function exibirNoPainel(atleta: CardDraft) {
  console.log(`--- DRAFT DISPONÍVEL ---`);
  console.log(`Jogador: ${atleta.nome}`);
  console.log(`Posição: ${atleta.posicao}`);
  console.log(`Rating: ${atleta.notaGeral}/100`);
}

// Teste seu código criando este objeto (ele deve compilar perfeitamente sem apontar erros)
const atletaSelecionado: CardDraft = {
  nome: "Anthony Davis",
  posicao: "Ala-Pivô",
  notaGeral: 94
};

exibirNoPainel(atletaSelecionado);