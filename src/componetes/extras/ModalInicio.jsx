import { useState } from "react";
import UsuarioServicio from "../../servicios/UsuarioServicio";

export function ModalInicio({ onLogin }) {
  
  const [credenciales, setCredenciales] = useState({
    correoElectronico: "",
    contrasenia: ""
  });

  const actualizar = (e) => {
    const { name, value } = e.target;
    setCredenciales(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const response = await UsuarioServicio.iniciarSesion(credenciales);
      const usuario = response.data;

      alert("Bienvenido " + usuario.nombre);

      if (onLogin) onLogin(usuario,credenciales.contrasenia); 

      document.getElementById('modal_inicio').checked = false;

    } catch (error) {
      alert(`Error al iniciar sesión: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <form className="space-y-4 flex flex-col" onSubmit={iniciarSesion}>
      <label>Ingresar el correo electrónico:</label>
      <input
        name="correoElectronico"
        type="email"
        value={credenciales.correoElectronico}
        onChange={actualizar}
        placeholder="Correo electrónico"
        className="input w-full"
      />

      <label>Ingresar la contraseña:</label>
      <input
        type="password"
        name="contrasenia"
        value={credenciales.contrasenia}
        onChange={actualizar}
        placeholder="Contraseña"
        className="input w-full"
      />

      <button type="submit" className="btn bg-blue-800 text-[20px] text-white">
        Iniciar Sesión
      </button>
    </form>
  );
}
