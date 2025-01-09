import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    const tokenJwt = socket.handshake.auth.token;

    try {
        jwt.verify(tokenJwt, process.env.SEGREDO_JWT);

    } catch (erro) {
        next(erro);
    }
}

export default autorizarUsuario;