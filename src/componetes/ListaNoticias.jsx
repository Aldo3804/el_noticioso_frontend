import { Noticia } from "./extras/Noticia";
import { useNoticias } from "../hooks/useNoticias";

export function ListaNoticias({ localia, favoritos = false }) {
  const { noticias, cargar } = useNoticias({ localia, favoritos });

  return (
    <div className="md:col-span-2 space-y-6">
      {noticias.map((noticia) => (
        <Noticia
          key={noticia.idNoticia}
          id={noticia.idNoticia}
          titulo={noticia.titulo}
          resumen={noticia.resumen}
          imagen={noticia.imagenUrl}
          autor={noticia.autor}
          fecha={noticia.fechaPublicacion}
          modo={favoritos ? "favorito" : "normal"}
          onEliminar={cargar} 
        />
      ))}
    </div>
  );
}
