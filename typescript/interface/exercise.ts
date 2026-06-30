interface Jogador {
    id: string,
    nome: string,
    time: string,
    numeroCamisa: number
    statusLesao?: "questionavel" | "fora do jogo" | "Nenhum"
}

interface Quarterback extends Jogador {
    jardasPassadas: number,
    touchdowns: number
    interceptacoes?: number
}


const estrelaDoTime: Quarterback = {
  id: "qb_15",
  nome: "Patrick Mahomes",
  time: "Kansas City Chiefs",
  numeroCamisa: 15,
  statusLesao: "Nenhum",
  jardasPassadas: 4183,
  touchdowns: 27
};