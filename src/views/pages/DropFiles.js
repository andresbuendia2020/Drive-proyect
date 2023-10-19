import { CContainer, CListGroup, CButton, CListGroupItem } from '@coreui/react'
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
