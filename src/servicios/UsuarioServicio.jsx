

import axios from "axios";


class UsuarioServicio{

    registrarUsuario(persona){
        return axios.post("https://el-noticioso-backend.onrender.com/usuario/crear",persona)
    }

    iniciarSesion(credenciales){
        return axios.post("https://el-noticioso-backend.onrender.com/usuario/sesion",credenciales)
    }

    buscarIdUsuario(correoElectronico,usuario){
        return axios.get(`https://el-noticioso-backend.onrender.com/usuario/buscar/${correoElectronico}`,
            {
                auth : {
                    username : usuario.correoElectronico,
                    password: usuario.contrasenia
                }
            }
        )
    }

    listarUsuarios(usuario){
        return axios.get(`https://el-noticioso-backend.onrender.com/admin/usuario/listar`,
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
