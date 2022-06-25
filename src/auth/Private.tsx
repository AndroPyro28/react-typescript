import React from 'react'
import Login from './Login'

interface PrivateProps {
    isLoggedIn: boolean,
    Component: React.ComponentType
}

function Private({isLoggedIn, Component}: PrivateProps) {
  
    return isLoggedIn ? <Component/> : <Login />;
}

export default Private