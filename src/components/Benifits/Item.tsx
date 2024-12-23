import React from 'react'

const Item = ({icon, title}:{icon: any, title:string}) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  )
}

export default Item
