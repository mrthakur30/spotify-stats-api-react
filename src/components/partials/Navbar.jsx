import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { HomeIcon , ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'
import {  useDispatch } from 'react-redux';
import { setTab ,setToken } from '../../utils/homeSlice';

function Navbar() {
  const [state, setState] = useState("home");
  const dispatch = useDispatch();
  function showSongs(){
      setState("songs");
  }
  function showArtists(){
      setState("artists");
  }
  function showHome(){
      setState("home");
  }
  function logOut(){
      dispatch(setToken(null))
  }
  dispatch(setTab(state));
  console.log(state);

  return (
    <div className=" flex flex-row md:gap-10  gap-4 bg-slate-800  w-full py-3  shadow-md  duration-200  justify-center items-center ">
       <HomeIcon  
       className=' invert h-10 md:absolute md:left-10 md:py-0 py-2.5 hover:py-0 duration-150 hover:opacity-50'
       onClick={showHome}
       />
       
          <motion.button
          onClick={showArtists}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
           class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               Your Top Artists
              </span>
          </motion.button>
          
          <motion.button
          onClick={showSongs}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
           class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Your Top Songs
            </span>
          </motion.button>
          <ArrowLeftOnRectangleIcon
          className=' invert h-10 md:absolute md:py-0 md:right-10 py-2.5 hover:py-0 duration-150  hover:opacity-50'
          onClick={logOut}
          />

          </div>
  )
}

export default Navbar