const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120.00, categoria: "Periféricos" },
  { id: 2, nome: "Teclado Mecânico", preco: 350.00, categoria: "Periféricos" },
  { id: 3, nome: "Monitor LED 24\"", preco: 890.00, categoria: "Hardware" },
  { id: 4, nome: "Mousepad", preco: 45.00, categoria: "Periféricos" },
  { id: 5, nome: "Cabo HDMI", preco: 25.00, categoria: "Acessórios" },
  { id: 6, nome: "Headset", preco: 190.00, categoria: "Periféricos" },
  { id: 7, nome: "Adaptador USB-C", preco: 60.00, categoria: "Acessórios" }
];


const array50menor = (produtos) => {
    return produtos.filter(item => {
        return item.preco < 50
    })
}

console.log(array50menor(produtos))