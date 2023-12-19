import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"


function ProtectedRoute() {

   const {loading, isAutenticated} = useAuth()

   if(loading) return <h1>Loading...</h1>
if (!loading && !isAutenticated) return <Navigate to='/login' replace/>

  return <Outlet/>
}

export default ProtectedRoute
