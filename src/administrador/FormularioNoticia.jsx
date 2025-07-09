import { useEffect, useState } from "react";
import { useUsuario } from "../hooks/useUsuario";
import NoticiasServicio from "../servicios/NoticiasServicio";

export function FormularioNoticia({ onCrear }) {
    const [formulario, setFormulario] = useState({
        titulo: "",
        resumen: "",
        localia: "",
        fechaPublicacion: "",
        imagenUrl: "",
        autor: "",
        idEtiqueta: "",
    });

    const [etiquetas, setEtiquetas] = useState([]);
    const { usuario } = useUsuario();

    useEffect(() => {
        async function cargarEtiquetas() {
            try {
                const response = await NoticiasServicio.listarEtiquetas(usuario);
                setEtiquetas(response.data);
            } catch (e) {
                alert(`Error al listar etiquetas: ${e.message}`);
            }
        }

        if (usuario) cargarEtiquetas();
    }, [usuario]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormulario((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const noticiaDTO = {
                idNoticia: 0,
                ...formulario,
                fechaPublicacion: new Date(formulario.fechaPublicacion),
                idEtiqueta: parseInt(formulario.idEtiqueta),
            };
            await NoticiasServicio.crearNoticia(noticiaDTO, usuario);
            alert("Noticia creada con éxito ✅");
            setFormulario({
                titulo: "",
                resumen: "",
                localia: "",
                fechaPublicacion: "",
                imagenUrl: "",
                autor: "",
                idEtiqueta: "",
            });
            if (onCrear) onCrear();
        } catch (e) {
            alert(`Error al crear la noticia: ${e.message}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6 space-y-4 max-w-4xl mx-auto mb-12">
            <h2 className="text-xl font-semibold">Crear nueva noticia 📰</h2>

            <input type="text" name="titulo" value={formulario.titulo}
                onChange={handleChange} placeholder="Título" className="input input-bordered w-full" required />
            <select name="localia" value={formulario.localia}
                onChange={handleChange} className="select select-bordered w-full text-black" required>
                <option value="">Seleccionar localía...</option>
                <option value="local">Local</option>
                <option value="regional">Regional</option>
                <option value="nacional">Nacional</option>
                <option value="internacional">Internacional</option>
            </select>

            <textarea name="resumen" value={formulario.resumen}
                onChange={handleChange} placeholder="Resumen" className="textarea textarea-bordered w-full" required />

            <input type="date" name="fechaPublicacion" value={formulario.fechaPublicacion}
                onChange={handleChange} className="input input-bordered w-full" required />

            <input type="text" name="imagenUrl" value={formulario.imagenUrl}
                onChange={handleChange} placeholder="URL de la imagen" className="input input-bordered w-full" required />

            <input type="text" name="autor" value={formulario.autor}
                onChange={handleChange} placeholder="Autor" className="input input-bordered w-full" required />

            <select name="idEtiqueta" value={formulario.idEtiqueta}
                onChange={handleChange} className="select select-bordered w-full bg-white text-black" required>
                <option value="">Seleccionar etiqueta...</option>
                {etiquetas.map((etiqueta) => (
                    <option key={etiqueta.idEtiqueta} value={etiqueta.idEtiqueta}>
                        {etiqueta.nombreEtiqueta}
                    </option>

                ))}
            </select>

            <button type="submit" className="btn btn-primary">Crear Noticia</button>
        </form>
    );
}
