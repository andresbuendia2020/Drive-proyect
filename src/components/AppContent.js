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
        {/* <div class="list-group">
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
        </div> */}
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
