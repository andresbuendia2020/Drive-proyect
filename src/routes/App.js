
import '../css/App.css';
import Navegacion from "../layouts/Navegacion.js"
import {DocumentosCreados} from "../pages/DocumentosCreados"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {DocumentoCard} from '../components/DocumentoCard'
import {DeleteDocuments} from '../components/EliminarDocumentoBoton'

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <DocumentosCreados />
      <Routes>
        <Route path="/" element={<DocumentoCard/>} />
        <Route path="/subirdocumento" element={<DocumentoCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
