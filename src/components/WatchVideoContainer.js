import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../store/HamburgerSlice';
import { useSearchParams } from 'react-router-dom';
import user from '../Images/utube.png'
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt, AiOutlineDownload, AiOutlineSave  } from 'react-icons/ai';
import Comments from './Comments';
import WatchVideoSuggestion from './videoSuggestion/WatchVideoSuggestion';
import { key } from '../utils/config';


export default function WatchVideoContainer() {
  const [videoInfo, setVideoInfo]= useState("");
  const [isOverflowHidden, setIsOverflowHidden] = useState(true);

  const handleDivClick = () => {
    setIsOverflowHidden(!isOverflowHidden);
  };

  const {snippet, statistics}=videoInfo;
/**const {title, channelTitle}= snippet; */

  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, );

  const [searchParams]=useSearchParams();

const getVideoInfo= async()=>{
    const data= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=${key}`);

    const jsonData= await data.json();
    setVideoInfo(jsonData.items[0]);
  }

  const dispatch=useDispatch();

  useEffect(()=>{
    getVideoInfo();
    dispatch(closeMenu());
  },[])

  const flippedStyle = {
    transform: 'scaleX(-1)',
  };

  function formatViewsCount(views) {
    if (views < 1000) {
      return views.toString(); 
    } else if (views < 1000000) {
      return (views / 1000).toFixed(0) + 'K';
    } else {
      return (views / 1000000).toFixed(1) + 'M';
    }
  }
 
  return (
    <div className='flex flex-col mt-4 sm:flex-row'>
    <div className=' sm:mx-7 mb-5 max-w-sm sm:max-w-5xl '>
      <iframe src={"https://www.youtube.com/embed/" + searchParams.get("v") +"?&autoplay=1&mute=0"} frameBorder="0" allow="accelerometer; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-xl w-[94%] h-[230px] sm:w-[1000px] sm:h-[555px]'></iframe>
      <h1 className='m-2 font-bold w-[93%] sm:w-[1000px]'>{snippet?.title}</h1>
      <div className='flex flex-col sm:flex-row justify-between w-[94%]  sm:w-[1000px]'>
      <div className='flex justify-between items-center'>
      <div className='flex m-2 '>
        <img src={user} alt="user" className='h-12 -mt-3 -ml-2 w-12 font-semibold  cursor-pointer'/>
        <h1 className=' mx-2'>{snippet?.channelTitle}</h1> 
        <p className=' h-8 p-1 px-3 border-2 mx-2 text-sm rounded-full cursor-pointer hover:bg-gray-200 hidden sm:inline'>Join</p> <p className='h-8 p-1 px-3 border-2 rounded-full text-sm mx-2 cursor-pointer hover:bg-gray-200  hidden sm:inline'>Subscribe</p>
        </div>
        
        <div className='flex self-center'>
        <p className='h-8 p-1 px-3 border-2 text-sm rounded-l-full cursor-pointer bg-gray-200 flex'> <AiOutlineLike size={18} className=' self-center' /> {formatViewsCount(statistics?.likeCount)}</p><p className='bg-gray-200 h-8'>|</p>
          <p className='h-8 p-1 px-3 border-2  text-sm cursor-pointer bg-gray-200 sm:mr-3 rounded-r-full'><AiOutlineDislike size={18} style={flippedStyle}  className=' self-end'/></p>
        </div>
        
       
      </div> 
      <div className='flex justify-between self-center'>
         
          <div id='watch-button' className='flex mr-1 justify-between  m-2 sm:m-0'>
          <p ><AiOutlineShareAlt size={18} className=' mx-3'/> Share</p>
          <p ><AiOutlineDownload size={18} className=' mx-3'/> Download</p>
          <p ><AiOutlineSave size={18} className=' mx-3'/> Save</p></div>
          
      </div>
    </div>
    <div className={`relative bg-gray-200 p-2 rounded-lg ${isOverflowHidden? 'h-16 p-1 overflow-hidden w-[91%] sm:w-[1000px]' : ' w-[96%]  sm:w-[1000px]'} text-sm ml-3 sm:ml-0 sm:mr-5 -z-10 `} onClick={()=> handleDivClick()}>
      
    <p className=' font-semibold'>{formatViewsCount(statistics?.viewCount)} views</p>

    <div >
      <p >{snippet?.description.split("\n").map((item, key)=> <span key={key} >{item}<br /></span>)
      }</p>
    </div>
    {isOverflowHidden && (
        <button
          className="absolute bottom-0 right-3 bg-gray-200 w-full flex justify-end font-semibold "
          onClick={handleDivClick}
        >
          ...Show More
        </button>)}
    </div>
    <Comments id={searchParams.get("v")}/>
    </div>
    
    <WatchVideoSuggestion /></div>
  )
}
