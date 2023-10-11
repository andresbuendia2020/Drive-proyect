import { Badge, Button, Card, CardBody, CardTitle } from "react-bootstrap"
import { Link, NavLink }  from "react-router-dom"

const DocumentoCard = ({documento, editable}) =>{
  return(
    <Card className="mt-3 mb-3">
      <Card.Header className="mi-card">
        {documento.subido ?
          <Badge className="mi-badge-subido">Subido</Badge> : 
          <Badge className="mi-badge-pendiente">Pendiente</Badge>
        }
        {editable?
          <div>
            <Button variant="primary" size="sm" className="me-2"
                    as={NavLink} to={`editardocumento/${documento.documentoID}`}
            >
              Editar
            </Button>
            <Button variant="danger" size="sm" className="me-2">Eliminar</Button>
          </div>
          :""
        }
      </Card.Header>
      <CardBody>
        <CardTitle>
          <Link to={`/documento/${documento.idDocumento}`}>
            {documento.nombre}
          </Link>
        </CardTitle>
        <Card.Text>
          Fecha: {documento.fechaCreacion}
        </Card.Text>
        <Card.Text>
          Creado por {documento.usarioEntity.nombre}, {documento.creado}
        </Card.Text>
      </CardBody>
    </Card>
  )
}

export  { DocumentoCard }