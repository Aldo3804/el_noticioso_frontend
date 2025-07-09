import { GoogleGenAI } from "@google/genai";
import { Tarjeta } from "./Tarjeta";
import { useEffect, useState } from "react";

export function Efemerides() {
  const [contenido, setContenido] = useState("Cargando efemérides....");
  const ai = new GoogleGenAI({ apiKey: "AIzaSyC9b6T-wy8VICOyrpNMIyOxFejtMEg898w" });

  useEffect(() => {
    const hoy = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
    const datosGuardados = localStorage.getItem("efemerides");
    const fechaGuardada = localStorage.getItem("efemeridesFecha");

    if (datosGuardados && fechaGuardada === hoy) {
      // Usar datos guardados si son del día actual
      setContenido(datosGuardados);
    } else {
      // Hacer consulta y guardar datos
      async function obtenerEfemerides() {
        const prompt = `Dame 5 efemerides del dia ${new Date()} pero quiero que sean cortas y que esten con salto de linea cada una y solo dame las efemerides y no me saludes, dame las fechas exactas y sin asteriscos`;
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: prompt,
        });
        setContenido(response.text);
        localStorage.setItem("efemerides", response.text);
        localStorage.setItem("efemeridesFecha", hoy);
      }
      obtenerEfemerides();
    }
  }, []);

  return (
    <Tarjeta
      titulo="Efemérides del día"
      contenido={contenido.split('\n').map((linea, i) => (
        <span key={i}>
          {linea}
          <br />
        </span>
      ))}
    />
  );
}
