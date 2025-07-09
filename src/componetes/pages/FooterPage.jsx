

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function FooterPage() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">El Noticioso</h4>
          <p className="text-sm text-gray-300">
            Noticias veraces y actualizadas para mantenerte informado.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Enlaces</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} El Noticioso. Todos los derechos reservados.
      </div>
    </footer>
  );
}
