


export function Tarjeta ({titulo,contenido}) {

    return (
        <section className="bg-white shadow-xl rounded-xl p-8 flex-1">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{titulo}</h2>
          <p className="text-gray-700 text-lg leading-relaxed tracking-wide text-justify">{contenido}</p>
        </section>
      )

}