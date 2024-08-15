import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard=({info})=> {

    const {snippet, statistics}=info;
    const { thumbnails, title, channelTitle}= snippet;
    const {viewCount}=statistics;

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
        <Link to={'/watch?v='+ info.id}>
        <div className=' py-5 m-1 sm:m-[6px] max-w-full sm:max-w-72 cursor-pointer hover:border-radius-none   w-[100%] sm:w-[1000px] '>
          <img src={thumbnails.high.url}
            className=' min-h-40 h-52 w-[346px]  md:h-[156px] md:w-80 md:max-w-[282px] rounded-xl object-cover transition-all duration-300 ease-in-out hover:rounded-none '/>
          <h1 className=' text-sm font-semibold line-clamp-2 max-w-[346px] sm:max-w-full'>{title}</h1>
          <p className='text-sm text-gray-600'>{channelTitle}</p>
          <p className='text-sm text-gray-600'>{formatViewsCount(viewCount)} views</p>
        </div>
        </Link>);
    
}

export default VideoCard;