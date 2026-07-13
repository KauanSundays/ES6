// Contratos base que todos os membros devem ter
interface ContratoMembro {
  id: number;
  nome: string;
  status: "Ativo" | "Inativo";
}

// Seus dados de teste (Copie e use no seu código)
const superHerois = [
  { id: 1, nome: "Homem de Ferro", status: "Ativo" as const, armadura: "Mark 85" },
  { id: 2, nome: "Thor", status: "Inativo" as const, arma: "Stormbreaker" }
];

const jogadoresBasquete = [
  { id: 10, nome: "LeBron James", status: "Ativo" as const, numeroCamisa: 23 },
  { id: 11, nome: "Anthony Davis", status: "Ativo" as const, numeroCamisa: 3 }
];

class GerenciadorDeElenco<T extends ContratoMembro> {
    private membros: T[];

    constructor(time: T[]) {
        this.membros = time;
    }

    buscarMembroPorId(id: number): T | undefined {
        return this.membros.find(membro => membro.id === id)
    }

    filtrarAtivos(): T[] {
        return this.membros.filter(membro => membro.status === "Ativo")
    }
}

const gerenciadorVingadores = new GerenciadorDeElenco(jogadoresBasquete);

const heroi = gerenciadorVingadores.buscarMembroPorId(1);
const herois = gerenciadorVingadores.filtrarAtivos();
console.log(herois);