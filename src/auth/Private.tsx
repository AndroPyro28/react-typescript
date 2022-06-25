import React from 'react'
import Login from './Login'
import {ProfileProps} from "./Profile";

// use this when you pass props indirectly to the Component like below

// interface PrivateProps {
//     isLoggedIn: boolean,
//     Component: React.ComponentType<ProfileProps> // we will pass ProfleProps when ::
//     // and tihs profileProps comes to Component which is posibile to be rendered down there like Profile
// }

// function Private({isLoggedIn, Component}: PrivateProps) {
  
//     return isLoggedIn ? <Component name="andro" /> : <Login />;
//     // you pass props here in Component props because it is not sure if what props will be rendered
// }

// use this when you pass props directly to the Component

interface PrivateProps {
    isLoggedIn: boolean,
    Component: React.ComponentType
}

function Private({isLoggedIn, Component}: PrivateProps) {
     return isLoggedIn ? <Component/> : <Login />;
}

export default Private