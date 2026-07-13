interface Banda {
  nome: string;
  vocalista: string;
  guitarrista: string;
  baixista: string;
  baterista: string;
}

// 1. ESTE É O OBJETO ORIGINAL
const acdc: Banda = {
  nome: "AC/DC",
  vocalista: "Brian Johnson",
  guitarrista: "Angus Young",
  baixista: "Cliff Williams",
  baterista: "Phil Rudd"
};

// 2. SUA MISSÃO: Complete a função abaixo.
// Ela deve receber a banda original e RETORNAR apenas um Partial<Banda>.
// No retorno (dentro do 'return'), monte um novo objeto que NÃO tenha o vocalista e o baixista.
function reformularBanda(bandaOriginal: Banda): Partial<Banda> {
  return {
    nome: bandaOriginal.nome,
    guitarrista: bandaOriginal.guitarrista,
    baterista: bandaOriginal.baterista
  };
}

// 3. TESTE SEU CÓDIGO
const bandaEmPausa = reformularBanda(acdc);
console.log(bandaEmPausa); 
