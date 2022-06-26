import React from 'react'

    interface ButtonProps {
        handleClick: (e: React.MouseEvent, id:number) => void
    }

function Button(props: ButtonProps) {
  return (
    <button onClick={e => props.handleClick(e, 1)}>click</button>
  )
}

export default Button