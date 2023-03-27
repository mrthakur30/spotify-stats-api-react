/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { motion } from 'framer-motion';

function Login() {

    const handleClick = ()=>{
        const clientId ="b6bb6404d9f14e8baea6cc4df354f6f9";
        const redirectUrl = "https://main--dashing-bublanina-abf290.netlify.app/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-read-playback-state",
            "user-top-read",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    };

  return (
   
        <div id='login' className=' bg-white/30  text-center gap-14 flex  justify-center items-center flex-col h-screen '> 
           <h1 className="  z-10  duration-150 ease-in  hover:text-indigo-400 md:animate-bounce text-indigo-300 text-8xl  ">Spotify Stats</h1>
           <h1 className="  absolute md:top-1/3  top-56 hover:text-indigo-300   animate-pulse md:animate-none  text-white text-8xl  ">Spotify Stats</h1>
            <div className='  md:w-1/3 p-2 flex gap-14  justify-center items-center flex-col' >
            <motion.button 
             whileTap={{scale:0.8}}
             whileHover={{scale:1.2}}
             onClick={handleClick} className='rounded-md border duration-100 hover:text-white border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-indigo-300'>
                Login 
            </motion.button>
           </div>  
        </div>     
   
  )
}

export default Login