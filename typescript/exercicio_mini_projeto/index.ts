interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  value: number;
}

async function fetchData<User>(url: string): Promise<User> {
  const response = await fetch(url);

  // Tratamento básico de erro de rede
  if (!response.ok) {
    throw new Error(`Erro HTTP! Status: ${response.status}`);
  }

  // O TypeScript confia que o JSON retornado será do tipo T
  const data: User = await response.json();
  return data;
}

// 3. Como usar a função na prática
async function getUserData() {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  try {
    // Passamos <User> para que o TS saiba exatamente o que essa chamada retorna
    const user = await fetchData<User>(url);

    // Agora você tem autocompletar e segurança de tipos!
    console.log(`Nome do usuário: ${user.name}`);
    console.log(`E-mail: ${user.email}`);
    
    // Se você tentar digitar user.idade, o TS vai dar erro antes mesmo de rodar.
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

getUserData();