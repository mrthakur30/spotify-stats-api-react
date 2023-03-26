import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:null,
    userInfo : null ,
    
    topTracksWeek :[],
    topTracksMonth : [],
    topTracksYear : [],

    topArtistsWeek : [],
    topArtistsMonth : [],
    topArtistsYear : [],
}

const homeSlice = createSlice({
    name : "home",
    initialState,
    reducers :{

        // addNote:(state,action)=>{
        //     state.noteItems = [...state.noteItems , action.payload]
        //     console.log(state.noteItems);
        // },
        setToken:(state,action)=>{
            state.token = action.payload ;
        },

        setUserInfo:(state,action)=>{
            state.userInfo = action.payload ; 
        },
        
        setTopTracksWeek:(state,action)=>{
            state.topTracksWeek = action.payload ;
        },

        setTopTracksMonth:(state,action)=>{
            state.topTracksMonth = action.payload ;
        },

        setTopTracksYear:(state,action)=>{ 
            state.topTracksYear = action.payload ;
        },

        setTopArtistsWeek:(state,action)=>{
            state.topArtistsWeek = action.payload ;
        },

        setTopArtistsMonth:(state,action)=>{
            state.topArtistsMonth = action.payload ;
        },

        setTopArtistsYear:(state,action)=>{ 
            state.topArtistsYear = action.payload ;
        },
    }
});

export const {setToken ,setUserInfo ,setTopTracksWeek , setTopArtistsMonth ,setTopArtistsWeek ,setTopArtistsYear ,setTopTracksYear ,setTopTracksMonth} = homeSlice.actions ;

export default homeSlice.reducer ;