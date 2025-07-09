import { useEffect, useState } from "react";
import { useUsuario } from "../hooks/useUsuario";
import NoticiasServicio from "../servicios/NoticiasServicio";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormularioNoticia } from "./FormularioNoticia";

export function NoticiasComponent() {
    const [noticias, setNoticias] = useState([]);
    const { usuario } = useUsuario();


    async function eliminarNoticia(idNoticia) {
        try {
            await NoticiasServicio.eliminarNoticia(idNoticia, usuario);
            alert("Noticia eliminada con éxito");
            listarNoticias(); 
        } catch (e) {
            alert(`Error al eliminar la noticia: ${e}`);
        }
    }


    async function listarNoticias() {
        try {
            const response = await NoticiasServicio.obtenerNoticias(usuario);
            const response1 = await NoticiasServicio.listarEtiquetas(usuario)
            setNoticias(response.data);
            console.log(response1.data)
        } catch (e) {
            alert(`Error al listar las noticias: ${e}`);
        }
    }

    useEffect(() => {
        if (usuario) listarNoticias();
    }, [usuario]);

    return (
        <div className="p-4">
            <h2 className="italic text-center text-3xl font-semibold mb-6">SECCIÓN NOTICIAS</h2>

            <FormularioNoticia onCrear={listarNoticias}/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {noticias.map((noticia, idx) => (
                    <section
                        key={idx}
                        className="card bg-base-100 shadow-xl"
                    >
                        <div className="card-body space-y-4">
                            <div className="flex">
                                <h2 className="card-title uppercase tracking-wide text-xl lg:text-2xl">
                                    {noticia.titulo}
                                </h2>
                                <button className="btn btn-ghost" onClick={() => eliminarNoticia(noticia.idNoticia)}>
                                    <FontAwesomeIcon icon={faMinus} color="red" />
                                </button>
                            </div>


                            <p className="text-base text-justify">{noticia.resumen}</p>

                            <img
                                src={noticia.imagenUrl}
                                alt={noticia.titulo}
                                className="w-full h-64 md:h-80 lg:h-[300px] object-cover rounded-lg"
                            />

                            <div className="card-actions justify-between items-center text-sm text-gray-500">
                                <span>
                                    Por:{" "}
                                    <span className="text-gray-800 font-medium">
                                        {noticia.autor}
                                    </span>
                                </span>
                                <time dateTime={noticia.fechaPublicacion} className="italic">
                                    {noticia.fechaPublicacion}
                                </time>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>

    );
}
