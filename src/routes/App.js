
import '../css/App.css';
import Navegacion from "../layouts/Navegacion.js"
import {DocumentosCreados} from "../pages/DocumentosCreados"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <DocumentosCreados />
    </BrowserRouter>
  );
}

export default App;
