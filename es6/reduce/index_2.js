const funcionarios = [
  { nome: "Ana", departamento: "Engenharia", salario: 8000 },
  { nome: "Bruno", departamento: "Marketing", salario: 5000 },
  { nome: "Carlos", departamento: "Engenharia", salario: 9500 },
  { nome: "Diego", departamento: "RH", salario: 4500 },
  { nome: "Elena", departamento: "Marketing", salario: 5500 },
  { nome: "Fabio", departamento: "Engenharia", salario: 7000 }
];

const gerarRelatorio = (funcionarios) => {
    const relatorio = funcionarios.reduce((acc, item) => {
        const salario = item.salario;
        const departamento = item.departamento;

        if (!acc[departamento]) {
            acc[departamento] = 0
        }


        acc[departamento] += salario;
        return acc
    }, {})

    return {
        relatorio: relatorio
    }
}

console.log(gerarRelatorio(funcionarios));
