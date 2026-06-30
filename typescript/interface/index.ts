// 1. Crie a interface DadosEntrega aqui
interface DadosEntrega {
    endereco: string,
    prazoDias: number
}

// 2. Crie a interface ItemCarrinho aqui
interface ItemCarrinho {
    id: string,
    nome: string,
    precoUnitario: number,
    quantidade: number
    observacao?: string
}

// 3. Crie a interface CheckoutPedido herdando de DadosEntrega
interface CheckoutPedido extends DadosEntrega {
    itens: ItemCarrinho[],
    totalSemDesconto: number,
    cupomDesconto?: string,
}


// --- TESTE O SEU CÓDIGO ABAIXO ---
// Se as interfaces estiverem corretas, o objeto abaixo não deve dar erro:

const meuFechamentoPedido: CheckoutPedido = {
  // Dados que vieram de 'DadosEntrega'
  endereco: "Av. Paulista, 1000",
  prazoDias: 5,
  
  // Dados do CheckoutPedido
  totalSemDesconto: 120,
  cupomDesconto: "VALE20", // remova essa linha depois para testar se continua válido!
  itens: [
    {
      id: "prod_99",
      nome: "Camiseta Dev",
      precoUnitario: 60,
      quantidade: 2,
      observacao: "Tamanho G" // opcional
    }
  ]
};