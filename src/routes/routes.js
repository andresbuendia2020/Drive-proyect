import React from 'react'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/partidoscreados', name: 'PartidosCreados', element: PartidosCreados },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
