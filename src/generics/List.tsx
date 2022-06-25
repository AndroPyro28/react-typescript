import React from 'react'

interface ListProps<T>{
  items: T[],
  onClick: (value: T) => void
}

type objectWithId = {
  id: number
  firstname: string,
  lastname: string
}

function List ({items, onClick}: ListProps<string | number | objectWithId >) {
  return (
    <div>
      <h2>List of items</h2>
      {
        items.map((item, index) => {
          if(typeof item === "object") {
            return <div key={item.id} onClick={() => onClick(item)}> {item.firstname} {item.lastname} </div>
          }
          else {
            return <div key={index} onClick={() => onClick(item)}> {item} </div>
          }
          
        })
      }
    </div>
  )
}

export default List