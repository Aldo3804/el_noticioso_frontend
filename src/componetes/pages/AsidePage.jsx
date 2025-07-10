import axios from "axios";
import { useState, useEffect } from "react";

export function AsidePage({ className = "" }) {
  const [noticiasAPI, setNoticiasAPI] = useState([]);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const response = await axios.get("https://gnews.io/api/v4/search", {
          params: {
            q: "Perú", // Puedes cambiar esto por cualquier palabra clave
            lang: "es",
            max: 10,
            apikey: "3cdf15ab6072d7729664a79e25ed36ec",
          },
        });
        setNoticiasAPI(response.data.articles);
      } catch (error) {
        alert("Error en el llamado: " + error.message);
        console.error(error);
      }
    }

    fetchNoticias();
  }, []);

  return (
    <aside className={`space-y-6 ${className}`}>
      <section>
        <h2 className="italic font-bold text-3xl mb-4">MÁS NOTICIAS</h2>
        {noticiasAPI.map((noti, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={noti.url}
            className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-base-100"
          >
            {noti.image && (
              <img
                src={noti.image}
                alt={noti.title}
                className="w-full sm:w-48 h-32 object-cover rounded"
              />
            )}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">{noti.title}</h3>
              <p className="text-sm text-gray-600 italic">
                {new Date(noti.publishedAt).toLocaleDateString("es-PE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                {noti.description || "Sin descripción disponible."}
              </p>
              <span className="text-xs text-gray-500 mt-2">
                Fuente: {noti.source.name}
              </span>
            </div>
          </a>
        ))}
      </section>
    </aside>
  );
}
