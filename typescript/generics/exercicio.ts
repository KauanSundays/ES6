// 1. Defina os tipos dos jogadores aqui
type Goalkeeper = {
  posicao: "goleiro";
  nome: string;
  defesas: number;
};

type Striker = {
  posicao: "atacante";
  nome: string;
  gols: number;
};

type JogadorBase = { nome: string };

// 2. Complete a função usando Generics (<T>)
function fazerSubstituicao<T extends JogadorBase>(jogadorSaindo: T, jogadorEntrando: T): T {
    console.log(`Sai: ${jogadorSaindo.nome} 🔄 Entra: ${jogadorEntrando.nome}`);
    return jogadorEntrando;
}


const goleiroTitular: Goalkeeper = { posicao: "goleiro", nome: "Alisson", defesas: 5 };
const goleiroReserva: Goalkeeper = { posicao: "goleiro", nome: "Ederson", defesas: 2 };

const atacanteTitular: Striker = { posicao: "atacante", nome: "Vini Jr", gols: 15 };
const atacanteReserva: Striker = { posicao: "atacante", nome: "Rodrygo", gols: 8 };

// ✅ Isso deve funcionar perfeitamente:
const novoGoleiro = fazerSubstituicao(goleiroTitular, goleiroReserva); 
// O TypeScript deve saber que 'novoGol eiro' é do tipo Goalkeeper e tem o atributo .defesas
console.log(novoGoleiro.defesas); 

// ❌ Isso DEVE DAR ERRO no TypeScript se você tentar compilar:
// O técnico não pode colocar um atacante no lugar de um goleiro usando essa função!
const erroSubstituicao = fazerSubstituicao(atacanteTitular, atacanteReserva);