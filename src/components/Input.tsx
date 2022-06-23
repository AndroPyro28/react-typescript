import React from 'react'

interface InputProps {
    value: string,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Input(props: InputProps) {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleChangeInput', e);
    }
    const {value, handleChange=handleChangeInput} = props;

  return (
    <input type={"text"} value={value} onChange={handleChange} />
  )
}

export default Input