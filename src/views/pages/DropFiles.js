// import {useState, useEffect} from "react"
import { CContainer, CListGroup, CButton, CListGroupItem } from '@coreui/react'
// import { cilDescription, cilImage, cilMovie } from '@coreui/icons'
// import CIcon from '@coreui/icons-react'
// import partidosCreados from '../../connections/datapartidoscreados'; 


// const MiUnidad= ()=>{

//     const [partidos, setPartidos] = useState([]);
//     const [buscando, setBuscando] = useState(true);

//     useEffect(()=>{
//         // axios.get(PARTIDOSCREADOS_GET_ENDPOINT)
//         // .then(respuesta => {
//         //     setPartidos(respuesta.data);
//         //     setBuscando(false);
//         // }).catch(err => {
//         //     console.error(err);
//         //     setBuscando(false);
//         // })

//         setPartidos(partidosCreados);
//         setBuscando(false);
//     }, []);


//     return (
//         <CContainer  className="mt-3 mb-3">
// 					<CContainer sm>
// 					<CButton color="success">Subir Archivo</CButton>
// 					</CContainer>
					
//                     <h3 className="text-center">Mi Unidad</h3>
//             <CRow className="">
//                 <CCol sm="12" md="8" lg="12">
//                     <CCardBody>
// 												<div class="list-group">
//             <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
//               <CIcon icon={cilDescription} size="lg" /> The current link item
//             </a>
//             <a href="#" class="list-group-item list-group-item-action">
//                 <CIcon icon={cilImage} size="lg" /> A second link item
//             </a>
//             <a href="#" class="list-group-item list-group-item-action">
//                 <CIcon icon={cilMovie} size="lg" /> A third link item
//               </a>
//             <a href="#" class="list-group-item list-group-item-action">
//               <CIcon icon={cilDescription} size="lg" /> A fourth link item
//               </a>
//             <a class="list-group-item list-group-item-action disabled" aria-disabled="true">
//             <CIcon icon={cilDescription} size="lg" /> A disabled link item
//             </a>
//             <a href="#" class="list-group-item list-group-item-action">
//               <CIcon icon={cilDescription} size="lg" /> A 5th link item
//               </a>
//             <a href="#" class="list-group-item list-group-item-action">
//               <CIcon icon={cilDescription} size="lg" /> A 6th link item
//             </a>
//             <a href="#" class="list-group-item list-group-item-action">
//               <CIcon icon={cilDescription} size="lg" /> A 7th link item
//             </a>
//             <a href="#" class="list-group-item list-group-item-action">
//               <CIcon icon={cilDescription} size="lg" /> A 8th link item
//             </a>
//             <a href="#" class="list-group-item list-group-item-action">
//               <CIcon icon={cilDescription} size="lg" /> A 9th link item
//             </a>
//         </div>
//                     </CCardBody>
//                 </CCol>
//             </CRow>
//         </CContainer >
//         )
// }

// export default MiUnidad

// src/MiUnidad.js
import React, { useState } from 'react';

const MiUnidad = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = prompt('Ingrese un elemento:');
    if (newItem) {
      setItems([...items, newItem]);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
		<CContainer  className="mt-3 mb-3">
    <div>
		<h3 className="text-center">Mi Unidad</h3>
			<CButton color="success" className="mb-3" onClick={addItem}>Subir Archivo</CButton>
      <CListGroup >
        {items.map((item, index) => (
          <CListGroupItem key={index} className="justify-content-between d-flex">
            {item} <CButton color="danger" onClick={() => deleteItem(index)}>Eliminar</CButton>
          </CListGroupItem>
        ))}
      </CListGroup>
    </div>
		</CContainer>
  );
};

export default MiUnidad;
