import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Navegacion(){
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>Drive Mágico</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to={"/subirdocumento"}>Subir Documento</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>


  )


}