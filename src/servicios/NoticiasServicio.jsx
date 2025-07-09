
import axios from "axios";




class NoticiasServicio{

    obtenerNoticiaInicio(){
        return axios.get(`http://localhost:8080/noticia/inicio`)
    }

    filtrarLocalia(localia){
        return axios.get(`http://localhost:8080/noticia/filtrar/${localia}`)
    }
    
    obtenerNoticias(usuario){
        return axios.get(`http://localhost:8080/admin/noticia/listar`,{
            auth : {
                username : usuario.correoElectronico,
                password: usuario.contrasenia
            }
        })
    }
    
    crearNoticia(noticia, usuario) {
        return axios.post("http://localhost:8080/admin/noticia/crear", noticia, {
            auth: {
            username: usuario.correoElectronico,
            password: usuario.contrasenia
            }
        });
    }


    eliminarNoticia(idNoticia,usuario){
        return axios.delete(`http://localhost:8080/admin/noticia/eliminar/${idNoticia}`,{
            auth : {
                username : usuario.correoElectronico,
                password : usuario.contrasenia
            }
        })
    }

    listarEtiquetas(usuario){
        return axios.get(`http://localhost:8080/admin/noticia/listar/etiquetas`,{
            auth : {
                username : usuario.correoElectronico,
                password:usuario.contrasenia
            }
        })
    }

}

export default new NoticiasServicio