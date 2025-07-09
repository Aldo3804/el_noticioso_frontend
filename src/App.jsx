import './App.css';
import { HeaderPage } from './componetes/pages/HeaderPage';
import { NavBar } from './componetes/pages/NavbarPage';
import { CuerpoPage } from './componetes/pages/CuerpoPage';
import { FooterPage } from './componetes/pages/FooterPage';
import { Routes, Route } from 'react-router-dom';
import { UsuarioProvider} from './hooks/useUsuario';
import { PanelComponent } from './administrador/PanelComponent';

function App() {
  
  

  return (
    <UsuarioProvider>
      <>
        <HeaderPage/>
        <NavBar />
        <Routes>
          <Route path="/" element={<CuerpoPage />} />
          <Route path="/:categoria" element={<CuerpoPage />} />
          <Route path="/administrador" element={<PanelComponent/>}></Route>
        </Routes>
        <FooterPage />
      </>
    </UsuarioProvider>
    
  );
}

export default App;
