export class AthleteData {
  constructor(
    public name: string,
    public position: string,
    public team: string
  ) {}

  getFormattedName(): string {
    return `${this.name} (${this.position} - ${this.team})`;
  }
}

type RawScore = number;
type SystemError = Error;

// Union Type: a atualização pode ser qualquer uma dessas 3 coisas
export type AthletePayload = RawScore | AthleteData | SystemError;

// --- 2. SUA FUNÇÃO DE PROCESSAMENTO ---
export function processAthleteUpdate(payload: AthletePayload): string {
  if (payload instanceof Error) {
    return `[SISTEMA]: Erro crítico - ${payload.message}`;
  }

  if (payload instanceof AthleteData) {
    return `[ATLETA]: ${payload.getFormattedName()}`;
  }

  if (typeof payload === 'number') {
    return `[PONTUAÇÃO]: ${payload} pts na rodada`;
  }

  return "Sinal não identificado";
}

// --- 3. BATERIA DE TESTES NO TERMINAL ---
console.log(processAthleteUpdate(14.5));
console.log(processAthleteUpdate(new AthleteData("A.J. Brown", "WR", "Eagles")));
console.log(processAthleteUpdate(new Error("Conexão interrompida no vestiário")));