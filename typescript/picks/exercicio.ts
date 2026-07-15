interface CarroCompleto {
  id: string;
  piloto: string;
  equipe: string;
  velocidadeAtual: number;
  temperaturaPneus: number;
  pressaoOleo: number;
  combustivelRestanteLitros: number;
  temperaturaAsfalto: number;
}

type TelemetriaTransmissao = Pick<CarroCompleto, 'piloto' | 'velocidadeAtual' | 'combustivelRestanteLitros'>

function atualizarGraficoTransmissao(dados: TelemetriaTransmissao) {
    console.log('Piloto é: ', dados.piloto);
    console.log('Velocidade é: ', dados.velocidadeAtual);
    console.log('O combustivel restante do carro é: ', dados.combustivelRestanteLitros);
}

const pilotoSelecionado: TelemetriaTransmissao = {
  piloto: "Lewis Hamilton",
  velocidadeAtual: 300,
  combustivelRestanteLitros: 21
};

atualizarGraficoTransmissao(pilotoSelecionado) 