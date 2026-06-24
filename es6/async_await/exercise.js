import readline from 'readline';

async function buscarPerfil(pokemon) {
    try {
        const linkAPI = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
        console.log("link para api é: ", linkAPI);
        
        const response = await fetch(
            'https://pokeapi.co/api/v2/pokemon/'+pokemon
        );

        return response.json()
    } catch (error){
        console.error("Erro ao consultar pokemon", error.message);
    }
}


// Create the terminal communication interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const name = await askQuestion('What is your pokemon name? ');

console.log(`Hello, ${name}!`);

const data =  await buscarPerfil(name);

const {name: nomePokemon, id, weight, height} = data;

console.log('---- POKÉMON ENCONTRADO ----');
console.log('Nome: ', nomePokemon.toUpperCase());
console.log('ID: ', id);
console.log('Peso: ', weight);
console.log('Altura: ', height);

rl.close();