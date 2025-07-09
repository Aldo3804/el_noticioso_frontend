import Logo from '../../assets/logo.png';
import { ModalRegistro } from '../extras/ModalRegistro';
import { ModalInicio } from '../extras/ModalInicio';
import { Avatar } from '../extras/Avatar';
import { useUsuario } from '../../hooks/useUsuario';

export function HeaderPage() {
  
  const {usuario,login,logout} = useUsuario()

  const estaLogueado = !!usuario;

  return (
    <header className="bg-gray-200 flex flex-col sm:flex-row items-center justify-between mx-10 mb-5">
      <img src={Logo} alt="logo" className="w-40 h-40" />

      <h1 className="hidden md:block text-2xl md:text-3xl font-bold mt-4 sm:mt-0">
        EL NOTICIOSO
      </h1>

      <section className="flex gap-4 sm:gap-10 mt-6 sm:mt-0">
        {!estaLogueado ? (
          <>
            <label htmlFor="modal_inicio" className="btn bg-blue-600 text-white">
              Iniciar Sesión
            </label>
            <input type="checkbox" id="modal_inicio" className="modal-toggle" />
            <dialog className="modal" role="dialog">
              <div className="modal-box mb-80">
                <h3 className="text-lg font-bold text-center uppercase">Iniciar Sesión</h3>
                <br />
                <ModalInicio onLogin={login} />
              </div>
              <label className="modal-backdrop" htmlFor="modal_inicio">Close</label>
            </dialog>

            <label htmlFor="modal_registro" className="underline cursor-pointer mt-2">
              Registrarse
            </label>
            <input type="checkbox" id="modal_registro" className="modal-toggle" />
            <dialog className="modal">
              <div className="modal-box mb-20">
                <h3 className="text-lg font-bold text-center uppercase">Regístrate</h3>
                <br />
                <ModalRegistro />
              </div>
              <label className="modal-backdrop" htmlFor="modal_registro">Close</label>
            </dialog>
          </>
        ) : (
          <>
            <Avatar nombre={usuario.nombre}/>
            <button onClick={logout} className="btn bg-red-600 text-white">
              Cerrar Sesión
            </button>
          </>
        )}
      </section>
    </header>
  );
}
