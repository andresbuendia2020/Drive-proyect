import '../assets/css/App.css';
import '../scss/style.scss'
import React, {Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from '../states/store'
import { RutaPrivada } from './RutaPrivada';
import Login from '../views/pages/Login';

const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/login" name="Login" element={<Login/>} />
            <Route element={<RutaPrivada />} >
            <Route path="*" name="Home" element={<DefaultLayout />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
