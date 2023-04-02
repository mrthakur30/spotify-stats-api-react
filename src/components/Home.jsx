/* eslint-disable jsx-a11y/alt-text */
import React ,{useEffect} from 'react'
import axios from 'axios'
import { useDispatch ,useSelector } from 'react-redux'
import { setUserInfo ,setTopTracksWeek , setTopArtistsMonth ,setTopArtistsWeek ,setTopArtistsYear ,setTopTracksYear ,setTopTracksMonth } from '../utils/homeSlice'
import TopArtists from './Top Artists/TopArtists'
import { motion } from 'framer-motion'
import TopTracks from "./TopTracks/TopTracks";
import Navbar from './partials/Navbar'
function Home() {
    const dispatch = useDispatch();
    const {token , userInfo,tab} = useSelector(state=>state.home);

    useEffect(()=>{
        const getUserInfo = async()=>{
           const response = await axios.get(
            "https://api.spotify.com/v1/me",
            {
            headers :{
            Authorization:"Bearer "+token,
            "Content-Type":"application/json",
          },
        });
        const data = response.data ;
        const userInfo = {
          userId : data.id,
          userName : data.display_name,
          imgUrl : data.images[0].url
        }
        dispatch(setUserInfo(userInfo));
        }

        const getTopTracksWeek = async()=>{
          const response = await axios.get(
              "https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=short_term",
              {
              headers :{
              Authorization:"Bearer "+token,
              "Content-Type":"application/json",
            },
          });
         
          const data = response.data ;
          const items = data.items.map((item)=>{
              return {
                  id:item.id,
                  name:item.name,
                  artist:item.artists[0].name,
                  imgUrl:item.album.images[0].url,
                  albumName:item.album.name,
                  albumId:item.album.id,
                  duration:item.duration_ms,
                  previewUrl:item.preview_url,
              }
          })
          dispatch(setTopTracksWeek(items));
          
        }
        
        const getTopTracksMonth = async()=>{
          const response = await axios.get(
              "https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=medium_term",
              {
              headers :{
              Authorization:"Bearer "+token,
              "Content-Type":"application/json",
            },
          });
          const data = response.data ;
        const items = data.items.map((item)=>{
            return {
                id:item.id,
                name:item.name,
                artist:item.artists[0].name,
                imgUrl:item.album.images[0].url,
                albumName:item.album.name,
                albumId:item.album.id,
                duration:item.duration_ms,
                previewUrl:item.preview_url,
            }
           
        })
        console.log(items);
        dispatch(setTopTracksMonth(items));
        }

        const getTopTracksYear = async()=>{
          const response = await axios.get(
              "https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=long_term",
              {
              headers :{
              Authorization:"Bearer "+token,
              "Content-Type":"application/json",
            },
          });
          const data = response.data ;
          const items = data.items.map((item)=>{
            return {
                id:item.id,
                name:item.name,
                artist:item.artists[0].name,
                imgUrl:item.album.images[0].url,
                albumName:item.album.name,
                albumId:item.album.id,
                duration:item.duration_ms,
                previewUrl:item.preview_url,
            }
        })
        dispatch(setTopTracksYear(items));
        }

        const getTopArtistsWeek = async()=>{
          const response = await axios.get(
            "https://api.spotify.com/v1/me/top/artists?limit=15&time_range=medium_term",
            {
            headers :{
            Authorization:"Bearer "+token,
            "Content-Type":"application/json",
          },
        });
       const data = response.data ;  
       const items = data.items.map((item)=>{
          return {
            id:item.id,
            name:item.name,
            imgUrl:item.images[0].url,
            genres: item.genres,
          }
        })

       dispatch(setTopArtistsWeek(items));
        }
 
        const getTopArtistsMonth = async()=>{
            const response = await axios.get(
                "https://api.spotify.com/v1/me/top/artists?limit=15&time_range=medium_term",
                {
                headers :{
                Authorization:"Bearer "+token,
                "Content-Type":"application/json",
              },
            });
          const data = response.data ;
          const items = data.items.map((item)=>{
              return {
                id:item.id,
                name:item.name,
                imgUrl:item.images[0].url,
                genres: item.genres,
              }
          })

         dispatch(setTopArtistsMonth(items));
        }

        const getTopArtistsYear = async()=>{
          
            const response = await axios.get(
                "https://api.spotify.com/v1/me/top/artists?limit=15&time_range=long_term",
                {
                headers :{
                Authorization:"Bearer "+token,
                "Content-Type":"application/json",
              },
            });
          const data = response.data ;
          const items = data.items.map((item)=>{
              return {
                  id:item.id,
                  name:item.name,
                  imgUrl:item.images[0].url,
                  genres: item.genres,
              }
          })
          dispatch(setTopArtistsYear(items));
        }
  
        getUserInfo();
        getTopArtistsMonth();
        getTopArtistsWeek();
        getTopArtistsYear();
        getTopTracksMonth();
        getTopTracksWeek();
        getTopTracksYear();

   },[dispatch,token]);

  if(userInfo===null) return ;
  const { userName , imgUrl} = userInfo ;
 
  return (
    <div>
      <Navbar />
     {tab==="home" &&
      <div id='home' className='flex  gap-16 justify-center items-center h-screen'>
          
        <div className=" flex flex-col gap-10 p-16 bg-black backdrop-blur-2xl  duration-200 hover:bg-opacity-30  shadow-md rounded-md bg-opacity-20 justify-center items-center h-2/3">
              <motion.img 
               whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
              src={imgUrl} className='rounded-full' />
              <span className='text-5xl  hover:  text-white duration-150 ease-in-out  font-bold  '>{userName}</span>
      </div>
     </div>
     }
     {tab==="songs"&&    <TopTracks></TopTracks> }
     {tab==="artists"&&  <TopArtists></TopArtists>}


    </div>
   
  )
}




export default Home




