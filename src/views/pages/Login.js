import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import { usuario } from '../../states/sliceReducers';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
	
const[errores, setErrores]= useState({})
const conexion=useSelector(state=>state.conexion)
const navegar=useNavigate()
const enviarAccion=useDispatch()

useEffect(()=>{
	if(conexion) {
		navegar("/");
	}
})

const login=({email, password}) => {
	const error = {}
	setErrores(error)

	enviarAccion(usuario({conexion: true, username:'andres'}))
}

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
   		<LoginForm errores={errores} callback={login}/>
    </div>
  );
};

export default Login;
