import React from 'react'
import Greet from '../components/Greet'

type CustomComponent = typeof Greet;
// to make a custom component and replicate a component 
function CustomComponent(props: React.ComponentProps<CustomComponent>) {
  return (
    <div>{props.name?.firstname}</div>
  )
}

export default CustomComponent