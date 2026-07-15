interface DraftedPlayer {
  id: string;             // Gerado automaticamente pelo banco
  name: string;
  college: string;
  position: "Guard" | "Forward" | "Center" | "WR";
  draftPickNumber: number;
  agentContact: string;   // Contato pessoal do agente (privado!)
  createdAt: Date;        // Gerado automaticamente pelo banco
}

type BroadcastPlayer = Omit<DraftedPlayer, "id" | "agentContact">

const jogador: BroadcastPlayer = {
  name: "Makai Lemon",
  college: "USC",
  position: "WR",
  draftPickNumber: 20,
  createdAt: new Date()
}