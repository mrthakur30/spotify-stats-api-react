/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import List from './List';
import { useSelector } from 'react-redux';

function TopTracks() {
    const [selectedTab, setSelectedTab] = useState(0);
    const {topTracksWeek , topTracksMonth , topTracksYear} =   useSelector(state=>state.home);
    const duration =  [topTracksWeek , topTracksMonth , topTracksYear];
  return (
    <div className='h-full'>
           <div className="py-4 px-4 md:px-8 dark:bg-gray-900">
      <ul
        role="tablist"
        className="flex flex-row justify-center   md:w-1/2   mt-20 mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 dark:bg-slate-800 rounded-lg sm:flex"
      >
        <li className="py-2">
          <button
          onClick={()=>setSelectedTab(0)}
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 focus:text-indigo-500 focus:bg-white hover:text-indigo-500 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
            >
            Past Month
          </button>
        </li>
        <li className="py-2 ">
          <button
          onClick={()=>setSelectedTab(1)}
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 focus:text-indigo-500 focus:bg-white hover:text-indigo-500 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
            >
            6 Months
          </button>
        </li>
        <li className="py-2">
          <button
          onClick={()=>setSelectedTab(2)}
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 focus:text-indigo-500 focus:bg-white hover:text-indigo-500 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
          >
            Past Year
          </button>
        </li>
        
      </ul>
      
    </div>
    <List type ={duration[selectedTab]}/>
    </div>
  )
}

 



export default TopTracks

