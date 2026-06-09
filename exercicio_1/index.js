const exibirInfo =  ({nome, preco, detalhes: {fabricante} })  => {
    console.log(`O produto ${nome} é fabricado por ${fabricante} e custa R$ ${preco}`);
}

const produto = {
  id: 101,
  nome: 'Teclado Mecânico',
  preco: 250.00,
  detalhes: {
    fabricante: 'TechKey',
    cor: 'Preto'
  }
};

exibirInfo(produto)