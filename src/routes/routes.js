import React from 'react'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const MiUnidad= React.lazy(()=> import('../views/pages/DropFiles.js'))
const Papelera= React.lazy(()=> import('../views/pages/Papelera.js'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/partidoscreados', name: 'PartidosCreados', element: PartidosCreados },
  { path: '/miunidad', name: 'MiUnidad', element: MiUnidad },
  { path: '/papelera', name: 'Papelera', element: Papelera },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
