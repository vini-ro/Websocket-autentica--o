import registrarEventosCadastro from './registrarEventos/Cadastro.js';
import registrarEventosLogin from './registrarEventos/login.js';
import registrarEventosInicio from './registrarEventos/Inicio.js';
import registrarEventosDocumento from './registrarEventos/Documento.js';

import io from './servidor.js';

io.on('connection', (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
});
