const conexoesDocumento = [];

function adicionarConexao(conexao) {
  conexoesDocumento.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumento
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

export { adicionarConexao, obterUsuariosDocumento };
