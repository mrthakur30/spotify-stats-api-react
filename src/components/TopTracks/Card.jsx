/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Card({index,name,image,artist,album}) {
  return (
 
    <div className='bg-black rounded h-full p-4 relative bg-opacity-50  flex flex-col justify-center gap-2 items-center w-full'>
               <span className=' text-amber-200 duration-150 hover:text-amber-400 font-bold text-4xl absolute left-2 top-2 '>{index+1}</span>
               <div class="flex-shrink-0">
                         <img class=" mx-2 h-40 rounded-full" src={image} alt="Neil image" />
               </div>
               <p class="text-2xl font-medium text-gray-900 my-2 truncate  dark:text-indigo-300 duration-100 hover:text-indigo-400">
                     {name.length > 15 ? album.slice(0,30)+"... ":name}
                </p>
                <p class="text-xl text-gray-900 truncate  font-light dark:text-slate-200 duration-100 hover:text-slate-300">
                             {artist}
                </p>
                <div class="inline-flex items-center text-md font-semibold text-gray-900 duration-100 dark:text-orange-200 hover:text-orange-300">
                     {album.length > 15 ? album.slice(0,30)+"... ":album}
                </div>

    </div>
  )
}

export default Card