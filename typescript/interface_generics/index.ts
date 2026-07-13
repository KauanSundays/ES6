interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface AtletaNBA {
  nome: string;
  time: string;
  mediaPontos: number;
}

interface PersonagemPop {
  nomeReal: string;
  alterEgo: string;
  universo: "Marvel" | "DC";
}

const apiAtleta: ApiResponse<AtletaNBA> = {
  success: true,
  message: "MVP selecionado!",
  data: { nome: "LeBron James", time: "Lakers", mediaPontos: 25.7 }
};

const apiHeroi: ApiResponse<PersonagemPop> = {
  success: true,
  message: "Herói convocado!",
  data: { nomeReal: "Bruce Wayne", alterEgo: "Batman", universo: "DC" }
};

function processarResposta<T>(response: ApiResponse<T>) {
  console.log(`Status da API: ${response.message}`);
  if ("alterEgo" in response.data) {
    console.log(`Herói: ${response.data.nomeReal} | Alter Ego: ${response.data.alterEgo}`);
    console.log("");
  } else {
    console.log(`Jogador: ${response.data.nome} | Time: ${response.data.time}`);
    console.log("");
  }
}

processarResposta(apiAtleta);
processarResposta(apiHeroi);