const carrinho = [
  { id: 1, nome: "Teclado Mecânico", categoria: "Eletrônicos", preco: 250, qtd: 1 },
  { id: 2, nome: "Mouse Gamer", categoria: "Eletrônicos", preco: 180, qtd: 2 },
  { id: 3, nome: "Livro: Pense em JS", categoria: "Livros", preco: 50, qtd: 3 },
  { id: 4, nome: "Monitor 24'", categoria: "Eletrônicos", preco: 900, qtd: 1 },
  { id: 5, nome: "Camiseta Dev", categoria: "Vestuário", preco: 70, qtd: 2 }
];


const calcular = (carrinho) => {
    const qtdTotal = carrinho.reduce((acc, item) => {
        return acc + item.qtd;
    }, 0)

    const precoTotal = carrinho.reduce((acc, item) => {
        return acc + item.preco * item.qtd;
    }, 0)

    const relatorio = carrinho.reduce((acc, item) => {
        const categoria = item.categoria;
        const valorItem = item.preco * item.qtd;

        // Se a categoria ainda não existe no objeto acc, criamos ela com valor 0
        if (!acc[categoria]) {
            acc[categoria] = 0;
        }

        acc[categoria] += valorItem;

        return acc;
    }, {})

    return {
        "qtdTotal": qtdTotal,
        "precoTotal": precoTotal,
        "relatorio": relatorio
    }
}

console.log(calcular(carrinho));
