

export function Adicionales(titulo, imagen, descripcion, ruta) {
    
    return (

        <a
            href={ruta}
            className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-base-100"
        >
            <div className="flex-1 text-left">
                <h4 className="text-lg font-semibold text-base-content">{titulo}</h4>
                <p className="text-sm text-base-content/70">{descripcion}</p>
            </div>
            <img
                src={imagen}
                alt={titulo}
                className="w-full sm:max-w-[150px] h-auto rounded-md object-cover"
            />
        </a>



    )

}
