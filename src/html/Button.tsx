import React from 'react'

type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} &  Omit<React.ComponentProps<'button'>, ''>
// Component props takes a generic type of Html Elements like 'button'
// and the arguments of omit is React.Component with generic of html elements
//and the second arguments is string if you want to limit the children to string
function Button({variant, children, ...rest}:ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest} >{children}</button>
  )
}

export default Button