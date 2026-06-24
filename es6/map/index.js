const produtos = [
  { id: 1, nome: 'Smartphone XYZ', preco: 2500, categoria: 'Eletrônicos' },
  { id: 2, nome: 'Notebook Pro', preco: 5000, categoria: 'Eletrônicos' },
  { id: 3, nome: 'Cadeira Ergonômica', preco: 1200, categoria: 'Móveis' },
  { id: 4, nome: 'Livro de JavaScript ES6', preco: 90, categoria: 'Livros' },
  { id: 5, nome: 'Fone de Ouvido Bluetooth', preco: 350, categoria: 'Eletrônicos' }
];


const produtosComDescontos = (produtos) => {
    return produtos.map(item => ({
        nomeProduto: item.nome, 
        precoOriginal: item.preco,
        precoFinal: "R$: " + (item.preco - ((item.preco / 100)*10)),
        eEletronico: item.categoria === "Eletrônicos"
    }))
}


console.log(produtosComDescontos(produtos));
