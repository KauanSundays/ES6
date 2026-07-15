// 1. As categorias de análise física dos jogadores do draft
type CategoriaDraft = 'forca' | 'velocidade' | 'arremesso';

// 2. O tipo que representa as notas e observações de cada categoria
interface AvaliacaoTecnica {
  nota: number; // Nota de 1 a 10
  observacao: string; // Ex: "Excelente no garrafão", "Precisa treinar passes"
}

// ==========================================
// SEU EXERCÍCIO COMEÇA AQUI
// ==========================================

// TAREFA 1: Use o Record<K, T> para tipar o objeto abaixo.
// As chaves devem ser do tipo 'CategoriaDraft' e os valores do tipo 'AvaliacaoTecnica'.
const fichaDoJogador: Record<CategoriaDraft, AvaliacaoTecnica> = {
    forca: {
        nota: 8,
        observacao: "excelente"
    },
    velocidade: {
        nota: 8,
        observacao: "excelente"
    },
    arremesso: {
        nota: 8,
        observacao: "excelente"
    }
};

// TAREFA 2: Escreva uma função que receba essa ficha de avaliação tipada 
// e mostre no console uma mensagem formatada de cada categoria.
function exibirRelatorio(ficha: Record<CategoriaDraft, AvaliacaoTecnica>) {
  console.log("Força:", ficha.forca.nota, "-", ficha.forca.observacao);
  console.log("Velocidade:", ficha.velocidade.nota, "-", ficha.velocidade.observacao);
  console.log("Arremesso:", ficha.arremesso.nota, "-", ficha.arremesso.observacao);
}

exibirRelatorio(fichaDoJogador)

// TAREFA 3 (Desafio de tipagem):
// Tente adicionar uma chave chamada 'defesa: { nota: 8, observacao: "Bom" }' no objeto 'fichaDoJogador'.
// O que acontece no TypeScript? Por que isso acontece?

const fichaDoJogador2: Record<CategoriaDraft, AvaliacaoTecnica> = {
    forca: {
        nota: 8,
        observacao: "excelente"
    },
    velocidade: {
        nota: 8,
        observacao: "excelente"
    },
    arremesso: {
        nota: 8,
        observacao: "excelente"
    },
    defesa: {
        nota: 8,
        observacao: "excelente"
    }
};