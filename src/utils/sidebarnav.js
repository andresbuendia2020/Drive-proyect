import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilDrop,
  cilFire,
  cilPuzzle,
  cilStorage,
  cilTrash,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  {
    component: CNavItem,
    name: 'Mi Unidad',
    to: '/miunidad',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    component: CNavGroup,
    name: 'Reciente',
    to: '/base',
    icon: <CIcon icon={cilFire} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'Papelera',
    to: '/papelera',
    icon: <CIcon icon={cilTrash} customClassName="nav-icon" />,
  },
]

export default sidebarnav
