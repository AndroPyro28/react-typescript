import React from 'react';

type props = {
    name:string
}

// type props

function Greet(props:props) {
    const {name} = props
  return (
    <div>
        <h2>Welcome {name} You have unread messages</h2>
    </div>
  )
}

export default Greet