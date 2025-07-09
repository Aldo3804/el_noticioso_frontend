// src/componentes/ModalRegistro.jsx
import { useState } from "react";
import UsuarioServicio from "../../servicios/UsuarioServicio";


export function ModalRegistro() {

  //Definir los estados de la persona a registrar
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    telefono: "",
    contrasenia: ""
  });


  //Cambiar el estado de los valores de los inputs
  const actualizar = (e) => {
    const { name, value } = e.target;
    setPersona((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  //Enviar los datos registrados usando el servicio de registrarUsuario 

  async function enviar (e){
      
      e.preventDefault()

      try{
        const response = await UsuarioServicio.registrarUsuario(persona)
        alert(`Usuario registrado con exito ${response}`)
      }catch(error){
        alert(`Error al registrar usuario : ${error.response.data.error}`)
      }

  }
  

  return (
    <form className="flex flex-col space-y-2" onSubmit={enviar}>
      <fieldset>
        <label>Nombre: </label>
        <input
          pattern="[a-zA-Z ]+"
          minLength="4"
          name="nombre"
          value={persona.nombre}
          placeholder="Ingrese el nombre"
          className="input w-full validator"
          onChange={actualizar}
          required
        />
        <label className="validator-hint">Ingrese un nombre valido</label>
      </fieldset>

      <fieldset>
        <label>Apellido: </label>
        <input
          name="apellido"
          pattern="[a-zA-Z ]+"
          minLength="5"
          value={persona.apellido}
          placeholder="Ingrese el apellido"
          className="input w-full validator"
          onChange={actualizar}
          required
        />
        <label className="validator-hint">Ingrese los apellidos validos</label>
      </fieldset>

      <fieldset>
        <label>Correo Electrónico: </label>
        <input
          name="correoElectronico"
          type="email"
          value={persona.correoElectronico}
          placeholder="Ingrese el correo electrónico"
          className="input w-full validator "
          onChange={actualizar}
          required
        />
        <label className="validator-hint">Ingrese un correo electronico valido</label>
      </fieldset>

      <fieldset>
        <label>Teléfono: </label>
        <input
          name="telefono"
          pattern="[0-9]*"
          maxLength="10"
          minLength="3"
          type="tel"
          value={persona.telefono}
          placeholder="Ingrese su teléfono"
          className="input w-full validator"
          onChange={actualizar}
          required
        />
         <label className="validator-hint">Ingrese un numero telefonico valido (Valido solo para Perú)</label>
      </fieldset>

      <fieldset>
        <label>Contraseña: </label>
        <input
          name="contrasenia"
          minLength={7}
          type="password"
          value={persona.contrasenia}
          placeholder="Ingrese su contraseña"
          className="input w-full validator"
          onChange={actualizar}
          required
        />
        <label className="validator-hint">La contraseña tiene que ser mayor a 7 caracteres</label>
      </fieldset>
      <br/>
      
      <button type="submit" className="btn bg-green-700 text-white text-[20px]">
        Enviar
      </button>
    </form>
  );
}
