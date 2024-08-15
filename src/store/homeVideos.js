import { createSlice } from "@reduxjs/toolkit";


const homeVideos= createSlice({
    name:"videos",
    initialState:{
        data:[]
    },
    reducers:{
        setVideoData:(state, action)=>{
            state.data.push(action.payload);
            console.log(action.payload)
        }
    }

})

export const {setVideoData}= homeVideos.actions;

export default homeVideos.reducer;