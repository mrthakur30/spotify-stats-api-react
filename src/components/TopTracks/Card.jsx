/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Card({index,name,image,artists,album}) {
  return (
    <div className='py-4 px-8 hover:shadow-xl '>
      <div class="flex items-center space-x-4">   <span className='text-white  font-bold'>{index+1}</span>
                    <div class="flex-shrink-0">
                        <img class="w-10 mx-4 h-10 rounded-full" src={image} alt="Neil image" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                            {name}
                        </p>
                        <p class="text-md text-gray-500 truncate dark:text-gray-400">
                            {artists}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {album.length > 15 ? album.slice(0,15)+"... ":album}
                    </div>
                </div>
    </div>
  )
}

export default Card