import {FC, useEffect, useRef} from 'react';

const inputRef = useRef<HTMLInputElement>(null)

useEffect( () => {
    inputRef.current?.focus()
}, [])


function DomRef() {
  return (
    <div>
        <input type="text" name="" id="" ref={inputRef} />
    </div>
  )
}

export default DomRef