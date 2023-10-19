import {useState, useEffect} from "react"
import { CContainer , CCardBody, CRow, CCol, CButton } from '@coreui/react'
import { cilDescription, cilImage, cilMovie } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import partidosCreados from '../../connections/datapartidoscreados'; 


const Papelera= ()=>{

    const [partidos, setPartidos] = useState([]);
    const [buscando, setBuscando] = useState(true);

    useEffect(()=>{
        // axios.get(PARTIDOSCREADOS_GET_ENDPOINT)
        // .then(respuesta => {
        //     setPartidos(respuesta.data);
        //     setBuscando(false);
        // }).catch(err => {
        //     console.error(err);
        //     setBuscando(false);
        // })

        setPartidos(partidosCreados);
        setBuscando(false);
    }, []);


    return (
        <CContainer  className="mt-3 mb-3">
					
                  <h3 className="text-center">Papelera</h3>
            <CRow className="">
                <CCol sm="12" md="8" lg="12">
                    <CCardBody>
												<div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
              <CIcon icon={cilDescription} size="lg" /> The current link item
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <CIcon icon={cilImage} size="lg" /> A second link item
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <CIcon icon={cilMovie} size="lg" /> A third link item
              </a>
            <a href="#" class="list-group-item list-group-item-action">
              <CIcon icon={cilDescription} size="lg" /> A fourth link item
              </a>
            <a class="list-group-item list-group-item-action disabled" aria-disabled="true">
            <CIcon icon={cilDescription} size="lg" /> A disabled link item
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <CIcon icon={cilDescription} size="lg" /> A 5th link item
              </a>
            <a href="#" class="list-group-item list-group-item-action">
              <CIcon icon={cilDescription} size="lg" /> A 6th link item
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <CIcon icon={cilDescription} size="lg" /> A 7th link item
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <CIcon icon={cilDescription} size="lg" /> A 8th link item
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <CIcon icon={cilDescription} size="lg" /> A 9th link item
            </a>
        </div>
                    </CCardBody>
                </CCol>
            </CRow>
        </CContainer >
        )
}

export default Papelera