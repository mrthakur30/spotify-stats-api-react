import React from 'react'
import Card from './Card';

function List({type}) {

  return (
    <div id="gradient" className='h-full '>
         {type.map((item,index)=>{
              return(
                <Card
                key={item.id}
                name = {item.name}
                image = {item.imgUrl}
                genres={item.genres}
                index={index}
                />
              )
         })}
    </div>
  )
}

export default List