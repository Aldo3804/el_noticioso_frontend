import axios from "axios";
import { useState, useEffect } from "react";

export function AsidePage({ className = "" }) {
  const [noticiasAPI, setNoticiasAPI] = useState([]);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/search",
          {
            params: {
              q: "noticias",
              lang: "es",
              max: 3,
              apikey: "3cdf15ab6072d7729664a79e25ed36ec"
            }
          }
        );
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
        <h2 className="italic font-bold text-3xl">MÁS NOTICIAS</h2>
        {noticiasAPI.map((noti, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={noti.url}
            className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-base-100"
          >
            <li className="list-none">
              <strong>{noti.title}</strong>
              {noti.image && (
                <img src={noti.image} alt="noticia" className="mt-2 max-h-48 object-cover" />
              )}
              <div className="flex flex-col mt-2">
                <label className="italic">
                  Fecha de Publicación: {noti.publishedAt.slice(0, 10)}
                </label>
                <label className="bold">
                  Fuente: {noti.source.name}
                </label>
              </div>
            </li>
          </a>
        ))}
      </section>
    </aside>
  );
}
