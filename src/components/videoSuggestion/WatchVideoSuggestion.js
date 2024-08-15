import { useSelector } from 'react-redux';
import VideoSuggestionCard from './VideoSuggestionCard';
import { useEffect, useState } from 'react';
import WatchVideoContainer from '../WatchVideoContainer';
import { VidoesLink } from '../../utils/config';

function WatchVideoSuggestion(){

    const [data , setData] = useState("");

    const getData= async()=>{
        const datao= await fetch(VidoesLink);
        const jsonData=await datao.json();
        setData(jsonData.items?.slice()?.reverse());
    }

        useEffect(()=>{
            getData();
        },[WatchVideoContainer])

   return (
    <div>{
         Object.values(data)?.map(video=>
            <VideoSuggestionCard info={video} key={video.id}/>
            )
      }</div>
  )
}

export default WatchVideoSuggestion