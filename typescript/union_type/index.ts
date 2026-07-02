type OrigemAtleta = string | false;

function processarOrigemDraft(atleta: string, origem: OrigemAtleta): string {
    if (typeof origem  === "string") {
        return `A origem do jogador ${atleta} é ${origem}`;
    } else {
        return `Jogador veio direto do high school`; 
    }
}

console.log(processarOrigemDraft("Michael Jordan", "North Carolina")); 

console.log(processarOrigemDraft("LeBron James", false)); 