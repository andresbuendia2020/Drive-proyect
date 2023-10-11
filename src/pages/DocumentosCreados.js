import { useState, useEffect } from "react"
import axios from "axios"
import { DOCUMENTOSSUBIDOS_GET_ENDPOINT } from "../connections/helpers/endpoints"
import { Card, Col ,Container, Row } from "react-bootstrap"
import { DocumentoCard, PartidoCard } from "../components/DocumentoCard"

const DocumentosCreados =()=>{

  {/*const documento = []*/}

  const [documentos, setDocumentos] = useState([{
    nombre:"",
    documentoID:"",
    idDocumento:"",
    fechaCreacion:"",
  }]);
  const [buscando, setBuscando] = useState(true);

  useEffect(()=>{
    axios.get(DOCUMENTOSSUBIDOS_GET_ENDPOINT)
    .then(respuesta=>{
      setDocumentos(respuesta.data);
      setBuscando(false);
    }).catch(e=>{
      console.error(e);
      setBuscando(false);
    })
  },[]);


  return(
    <Container className="mt-3 mb-3">
        <Row className="justify-content-md-center">
          <h3 className="text-center">
            Documentos Creados
          </h3>
              <Card.Body>
              {buscando ? "Cargando..." : (documentos.length ===0 && "No hay documentos diisponibles")}
              {documentos.map(documento=> <DocumentoCard key={documento.idDocumento} documento={documento} editable={false}/>)}
              

            </Card.Body>


        </Row>
      </Container>

  )

}

export {DocumentosCreados}