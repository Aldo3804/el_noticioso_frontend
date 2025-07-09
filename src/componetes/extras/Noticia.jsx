import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark,faMinus } from "@fortawesome/free-solid-svg-icons";
import { useUsuario } from "../../hooks/useUsuario";
import UsuarioServicio from "../../servicios/UsuarioServicio";
import FavoritoServicio from "../../funciones/FavoritoServicio";
import { useState } from "react";

export function Noticia({ id, titulo, resumen, imagen, autor, fecha, modo = "normal" ,onEliminar}) {
  
  const { usuario } = useUsuario();
  const estaLogueado = !!usuario;
  const [visible, setVisible] = useState(true); 

  async function agregarFavorito() {
    
    try {

      const responseUsuario = await UsuarioServicio.buscarIdUsuario(usuario.correoElectronico, usuario)
      const idUsuario = responseUsuario.data;

      const favorito = { idNoticia: id, idUsuario };
      const response = await FavoritoServicio.agregarFavorito(favorito,usuario);

      alert(`La noticia se agregó a tus favoritos: ${response.data}`);
      if (onEliminar) onEliminar()
        
    } catch (error) {
    
      alert(`Error al guardar en favoritos: ${error.message}`);
    
    }
  }

  async function eliminarFavorito() {
    try {
      const responseUsuario = await UsuarioServicio.buscarIdUsuario(usuario.correoElectronico,usuario);
      const idUsuario = responseUsuario.data;

      await FavoritoServicio.eliminarFavorito({ idNoticia: id, idUsuario }, usuario);

      alert("Noticia eliminada de favoritos");

      setVisible(false)

    } catch (error) {
      alert(`Error al eliminar favorito: ${error.message}`);
    }
  }

  if (!visible) return null


  return (
    <section className="card bg-base-100 shadow-xl max-w-4xl mx-auto my-10">
      <div className="card-body space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="card-title uppercase tracking-wide text-xl lg:text-2xl">{titulo}</h2>

          {estaLogueado && (
            <>
              {modo === "normal" ? (
                <button className="btn btn-ghost" onClick={agregarFavorito}>
                  <FontAwesomeIcon icon={faBookmark} color="#fcea15" />
                </button>
              ) : (
                <button className="btn btn-ghost" onClick={eliminarFavorito}>
                  <FontAwesomeIcon icon={faMinus} color="red" />
                </button>
              )}
            </>
          )}
        </div>

        <p className="text-base text-justify">{resumen}</p>

        <img
          src={imagen}
          alt={titulo}
          className="w-full h-64 md:h-80 lg:h-[400px] object-cover rounded-lg"
        />

        <div className="card-actions justify-between items-center text-sm text-gray-500">
          <span>
            Por: <span className="text-gray-800 font-medium">{autor}</span>
          </span>
          <time dateTime={fecha} className="italic">
            {fecha}
          </time>
        </div>
      </div>
    </section>
  );
}
