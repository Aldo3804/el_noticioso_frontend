import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

 const UsuarioContext = createContext(); 

 export function UsuarioProvider({ children }) {

   const [usuario, setUsuario] = useState(null);
   const navigate = useNavigate();
   
    useEffect(() => { 
      const usuarioGuardado = localStorage.getItem("usuario"); 
      if (usuarioGuardado) { setUsuario(JSON.parse(usuarioGuardado)); 
      } }, []); 
      function login(usuarioData, contrasenia) { 
        const usuarioCompleto = { ...usuarioData, contrasenia };
        setUsuario(usuarioCompleto); 
        localStorage.setItem("usuario", JSON.stringify(usuarioCompleto)); 
      } 
      
      function logout() { 
        setUsuario(null); 
        localStorage.removeItem("usuario"); 
        navigate("/");
      } 
      
      
    return ( 
        <UsuarioContext.Provider value={{ usuario, login, logout }}> 
          {children} 
        </UsuarioContext.Provider> ); 
        
        } 
        
    export function useUsuario() { 
       return useContext(UsuarioContext); 
    }