import { useState, useEffect } from "react";
import NoticiasServicio from "../servicios/NoticiasServicio";
import FavoritoServicio from "../funciones/FavoritoServicio";
import UsuarioServicio from "../servicios/UsuarioServicio";
import { useUsuario } from "./useUsuario";

export function useNoticias({ localia, favoritos }) {

  const [noticias, setNoticias] = useState([]);
  const { usuario } = useUsuario();

  async function cargarNoticias() {
    try {
      if (favoritos && usuario) {
        const resUsuario = await UsuarioServicio.buscarIdUsuario(usuario.correoElectronico,usuario);
        const response = await FavoritoServicio.listarFavorito(resUsuario.data,usuario);
        setNoticias(response.data);
      } else {
        const response = localia
          ? await NoticiasServicio.filtrarLocalia(localia)
          : await NoticiasServicio.obtenerNoticiaInicio();
        setNoticias(response.data);
      }
    } catch (error) {
      alert(`Error al cargar noticias: ${error.message}`);
    }
  }

  useEffect(() => {
    cargarNoticias();
  }, [localia, favoritos]);

  return { noticias,cargar : cargarNoticias };
}

