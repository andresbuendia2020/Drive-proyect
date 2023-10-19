import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {  CContainer, CSpinner } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import routes from '../routes/routes'
import { cilDescription, cilImage, cilMovie } from '@coreui/icons'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
              
            )
          })}
          <Route path="/" element={<Navigate to="/partidoscreados" replace />} />
        </Routes>
        {}
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
