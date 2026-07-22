// --- TIPOS ---
type ApiSuccessPlayer = {
  status: "success";
  payload: {
    nome: string;
    gols: number;
    assistencias: number;
  };
};

type ApiError = {
  status: "error";
  code: number;
  message: string;
};

// --- DADOS PARA TESTAR ---
const respostasDaApi: unknown[] = [
  { status: "success", payload: { nome: "Wayne Gretzky", gols: 894, assistencias: 1963 } },
  { status: "error", code: 404, message: "Jogador não encontrado no banco de dados." },
  { status: "error", code: 500, message: "Falha interna no servidor de estatísticas." },
  { status: "success", payload: { nome: "Sidney Crosby", gols: 591, assistencias: 1002 } }
];

// --- SEU DESAFIO ---

// 1. Implemente o Type Guard usando Type Predicate (is)
// Ele deve retornar 'true' se o objeto recebido for do tipo 'ApiError'
function isApiError(data: unknown): data is ApiError {
  // ✍️ ESCREVA A SULUÇÃO DO TYPE GUARD AQUI
  return (
      typeof data === "object" &&
      data !== null &&
      "status" in data && 
      (data as any).status === "error"
    );
}

// 2. Implemente a função que consome a resposta da API
function processarResposta(resposta: unknown): string {
  if (isApiError(resposta)) {
    return `[ERRO 404 ${resposta.message}] Jogador não encontrado no banco de dados.`
  }

  // Se não for erro, assuma o tipo genérico e exiba os dados
  return "Dados processados com sucesso!";
}

// Execução para teste:
respostasDaApi.forEach((res) => {
  console.log(processarResposta(res));
});
