/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Card({index,name,image,genres}) {
  return (
  
    <div className='bg-black rounded h-72 p-4 relative bg-opacity-50  flex flex-col justify-center gap-2 items-center w-full'>
    <span className=' text-amber-200 duration-150 hover:text-amber-400 font-bold text-4xl absolute left-2 top-2 '>{index+1}</span>
    <div class="flex-shrink-0">
              <img class=" mx-2 h-40 rounded-full" src={image} alt="Neil image" />
    </div>
    <p class="text-2xl font-medium text-gray-900 truncate  dark:text-indigo-300 duration-100 hover:text-indigo-400">
          {name.length > 15 ? name.slice(0,30)+"... ":name}
     </p>
     
     <div class="inline-flex items-center text-lg font-semibold text-gray-900 duration-100 dark:text-orange-200 hover:text-orange-300">
     {genres[0]}
     </div>

</div>
  )
}

export default Card
