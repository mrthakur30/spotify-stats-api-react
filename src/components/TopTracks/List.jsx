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
                artist = {item.artist}
                album = {item.albumName}
                image = {item.imgUrl}
                index={index}
                />
              )
         })}
    </div>
  )
}

export default List