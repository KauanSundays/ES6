const temaPadrao = {
  tema: 'claro',
  fonte: 'Arial',
  tamanhoFonte: 14,
  mostrarSidebar: true
};

const personalizacaoUsuario = {
  tema: 'escuro',
  tamanhoFonte: 16
};

const customizarTema = (padrao, novo) => {
    return {...padrao, ...novo}
}

console.log(customizarTema(temaPadrao, personalizacaoUsuario));