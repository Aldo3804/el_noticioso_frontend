import { useEffect, useState } from "react"
import UsuarioServicio from "../servicios/UsuarioServicio"
import { useUsuario } from "../hooks/useUsuario"

export function UsuariosComponent(){
  const [usuarios, setUsuarios] = useState([]);
  const { usuario } = useUsuario(); 

  async function listarUsuarios() {
    try {
      const response = await UsuarioServicio.listarUsuarios(usuario);
      setUsuarios(response.data);
      console.log("Usuarios:", response.data);
    } catch (e) {
      alert(`Error al listar usuarios: ${e.message}`);
    }
  }

  useEffect(() => {
    if (usuario) listarUsuarios(); 
  }, [usuario]);

    return (
        <div className="p-4 overflow-x-auto">
            <h2 className="italic text-center text-3xl font-semibold mb-6">SECCIÓN USUARIOS</h2>

            <table className="table table-zebra table-lg w-full text-sm">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u, idx) => (
                        <tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{u.nombre}</td>
                            <td>{u.apellido}</td>
                            <td>{u.correoElectronico}</td>
                            <td>{u.telefono}</td>
                            <td>
                                <span className={`text-white font-semibold badge ${u.rol.toLowerCase() === "administrador" ? "badge-warning" : "badge-info"} gap-2`}>
                                    {u.rol}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}
