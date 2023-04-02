import React from 'react'
import Card from './Card';

function List({type}) {

  return (
    <div id="gradient" className='h-full  md:py-6 py-2 grid md:px-4 px-10  grid-cols-1 md:grid-cols-3 justify-evenly gap-5'>
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