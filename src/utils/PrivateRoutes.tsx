import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoutes =(props:any) =>{

  const {isLoading,isAuthenticated} = useAuth0()

  if(isLoading) {
    return <></>
  }

  return isAuthenticated ? <Outlet/> : <Navigate to="/" />
}

export default ProtectedRoutes;