import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
function RutaPrivada() {
	const conexion=useSelector(state => state.conexion);
	return conexion ? <Outlet/> : <Navigate to={"/login"} replace />
}


export {RutaPrivada}
