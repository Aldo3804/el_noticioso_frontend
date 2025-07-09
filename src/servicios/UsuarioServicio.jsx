

import axios from "axios";


class UsuarioServicio{

    registrarUsuario(persona){
        return axios.post("http://localhost:8080/usuario/crear",persona)
    }

    iniciarSesion(credenciales){
        return axios.post("http://localhost:8080/usuario/sesion",credenciales)
    }

    buscarIdUsuario(correoElectronico,usuario){
        return axios.get(`http://localhost:8080/usuario/buscar/${correoElectronico}`,
            {
                auth : {
                    username : usuario.correoElectronico,
                    password: usuario.contrasenia
                }
            }
        )
    }

    listarUsuarios(usuario){
        return axios.get(`http://localhost:8080/admin/usuario/listar`,
            {
                auth : {
                    username:usuario.correoElectronico,
                    password:usuario.contrasenia
                }
            }
        )
    }
}

export default new UsuarioServicio
