
import axios from "axios";




class NoticiasServicio{

    obtenerNoticiaInicio(){
        return axios.get(`https://el-noticioso-backend.onrender.com/noticia/inicio`)
    }

    filtrarLocalia(localia){
        return axios.get(`https://el-noticioso-backend.onrender.com/noticia/filtrar/${localia}`)
    }
    
    obtenerNoticias(usuario){
        return axios.get(`https://el-noticioso-backend.onrender.com/admin/noticia/listar`,{
            auth : {
                username : usuario.correoElectronico,
                password: usuario.contrasenia
            }
        })
    }
    
    crearNoticia(noticia, usuario) {
        return axios.post("https://el-noticioso-backend.onrender.com/admin/noticia/crear", noticia, {
            auth: {
            username: usuario.correoElectronico,
            password: usuario.contrasenia
            }
        });
    }


    eliminarNoticia(idNoticia,usuario){
        return axios.delete(`https://el-noticioso-backend.onrender.com/admin/noticia/eliminar/${idNoticia}`,{
            auth : {
                username : usuario.correoElectronico,
                password : usuario.contrasenia
            }
        })
    }

    listarEtiquetas(usuario){
        return axios.get(`https://el-noticioso-backend.onrender.com/admin/noticia/listar/etiquetas`,{
            auth : {
                username : usuario.correoElectronico,
                password:usuario.contrasenia
            }
        })
    }

}

export default new NoticiasServicio