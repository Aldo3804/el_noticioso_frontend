import axios from "axios";
import { useState, useEffect } from "react";

export function AsidePage({ className = "" }) {

  const [noticiasAPI, setNoticiasAPI] = useState([]);

  useEffect(() => {


    async function fetchNoticias() {
      try {
        const response = await axios.get(
            "https://newsapi.org/v2/everything?q=es&language=es&apiKey=28113ad732ac4a18a60497ab2219225a"
        );
        setNoticiasAPI(response.data.articles);
      } catch (error) {
        alert("Error en el llamado: " + error.message);
        console.error(error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <aside className={`space-y-6 ${className}`}>
        
        <section>
              <h2 className="italic font-bold text-3xl">MAS NOTICIAS</h2 >
              {noticiasAPI.slice(29,32).map((noti, index) => (
                  <a target={"_blank"} href={noti.url} className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-base-100">
                    <li key={index} className="list-none">{noti.title}
                        <img src={noti.urlToImage}></img>
                        <div className="flex flex-col">
                            <label className="italic"> Fecha de Publicación : {noti.publishedAt.slice(0, 10)}</label>
                            <label className="bold"> Autor : {noti.author}</label>
                        </div>
                    </li>
                  </a>  
                  
              ))}
        </section>
      <ul>
        
      </ul>
    </aside>
  );
}
