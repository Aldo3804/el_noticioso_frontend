
import axios from "axios"





class FavoritoServicio {


    agregarFavorito(favorito, usuario) {
        return axios.put(`http://localhost:8080/favoritos/aniadir`, favorito,
            {
                auth: {
                    username: usuario.correoElectronico,
                    password: usuario.contrasenia
                }
            }
        )
    }

    eliminarFavorito(favorito, usuario) {
        return axios.delete("http://localhost:8080/favoritos/eliminar", {
            data: favorito,
            auth: {
                username: usuario.correoElectronico,
                password: usuario.contrasenia,
            },
        });
    }

    listarFavorito(idUsuario, usuario) {
        return axios.get(`http://localhost:8080/favoritos/listar/${idUsuario}`,
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

