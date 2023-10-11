import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DeleteDocuments from '../components/EliminarDocumentoBoton';

export default function Navegacion(){
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>Drive Mágico</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=''>
            <Nav.Link as={NavLink} to={"/subirdocumento"}>Subir Documento</Nav.Link>
          </Nav>
          <Nav className=''>
            <Nav.Link as={NavLink} to={"/eliminardocumento"}>Eliminar Documento</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )


}