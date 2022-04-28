import React from 'react'
import { useAuth } from './auth'
import { Navigate, useLocation } from 'react-router-dom';
function RequireAuth({children}) {
    const auth = useAuth();
    const location = useLocation();
    if(!auth.username){
        return <Navigate to='/Login1' state={{path: location.pathname}} />
    }
  return (
    children
  )
}

export default RequireAuth