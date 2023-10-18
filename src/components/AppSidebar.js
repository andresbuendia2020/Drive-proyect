import React from 'react'
import { useSelector } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logoNegative } from '../assets/brand/logo-negative'
import { sygnet } from '../assets/brand/sygnet'
import { AppSidebarNav } from './sidebar/AppSidebarNav'
import * as icon from '@coreui/icons';


import items from '../utils/sidebarnav'


const AppSidebar = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
    >
      <CSidebarBrand className="d-none d-md-flex justify-content-center" to="/">
        <CIcon className="sidebar-brand-full" icon={icon.cibAzureArtifacts} size="xl"/>
          <h5 style={{margin:"0 0 0 15px"}}>DRIVE TEST</h5>
      </CSidebarBrand>
      <CSidebarNav>
          <AppSidebarNav items={items} />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
