async function buscarPaises() {
    console.log("enviando requisição");
    
    const response = await fetch("https://www.apicountries.com/countries"
    )
    const data = await response.json();
    return data
};

const data = await buscarPaises();

console.log(data);