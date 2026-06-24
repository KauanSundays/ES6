const usuario = {
  id: 101,
  nome: "Kauan",
  info: {
    cidade: "São Paulo",
    status: "Ativo"
  },
  habilidades: ["Python", "JavaScript"]
};

const criarUsuario = (usuario) => {
  return {
    ...usuario,
    info: {
      ...usuario.info,
      cidade: "Campinas"
    },
    habilidades: [
      ...usuario.habilidades,
      "TypeScript"
    ]
  }
}

const novoUsuario = criarUsuario(usuario);

console.log("primeiro usuario: ", usuario);
console.log("novo usuario: ", novoUsuario);
