
import axios from "axios"





class FavoritoServicio {


    agregarFavorito(favorito, usuario) {
        return axios.put(`https://el-noticioso-backend.onrender.com/favoritos/aniadir`, favorito,
            {
                auth: {
                    username: usuario.correoElectronico,
                    password: usuario.contrasenia
                }
            }
        )
    }

    eliminarFavorito(favorito, usuario) {
        return axios.delete("https://el-noticioso-backend.onrender.com/favoritos/eliminar", {
            data: favorito,
            auth: {
                username: usuario.correoElectronico,
                password: usuario.contrasenia,
            },
        });
    }

    listarFavorito(idUsuario, usuario) {
        return axios.get(`https://el-noticioso-backend.onrender.com/favoritos/listar/${idUsuario}`,
            {
                auth: {
                    username: usuario.correoElectronico,
                    password: usuario.contrasenia
                }
            }
        )
    }


}

export default new FavoritoServicio

