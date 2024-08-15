import { VidoesLink } from '../utils/config';
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { useDispatch } from 'react-redux';
import { setVideoData } from '../store/homeVideos';

const VideosContainer=()=> {

    const [data, setData]= useState([]);
    const dispatch= useDispatch();

    useEffect(()=>{
        getVideosData();
    },[])
    
    const getVideosData= async ()=>{
    const data= await fetch(VidoesLink);
    const jsonData= await data.json();
    setData(jsonData.items)
    dispatch(setVideoData(jsonData.items));
    }


  return (
    <div className='flex flex-wrap sm:ml-3 justify-center sm:justify-normal '>
      {
        data?.map(video=>
          <VideoCard info={video} key={video.id}/>)
      }
    </div>
    
  )
}

export default VideosContainer;