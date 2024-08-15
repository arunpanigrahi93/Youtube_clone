import React from 'react'
import { Link } from 'react-router-dom';


function VideoSuggestionCard({info}) {
    
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
        <div className=' py-1  cursor-pointer hover:border-radius-none flex flex-col sm:flex-row  w-[96%] sm:w-[400px] ml-2'>
          <img
            src={thumbnails.high.url}
            className='h-52 sm:h-28 w-[92%] sm:w-[87%] sm:max-w-48 rounded-xl object-cover transition-all duration-300 ease-in-out hover:rounded-none'
          />
          <div className=' mx-5 mt-2 mb-7'>
          <h1 className='text-md font-semibold line-clamp-2 w-[96%] sm:max-w-56'>{title}</h1>
          <div className='flex sm:flex-col'>
          <p className='text-sm text-gray-600'>{channelTitle}</p>
          <p className='text-sm text-gray-600'>{formatViewsCount(viewCount)} views</p>
          </div>
          </div>
        </div>
        </Link>
      );
      

}

export default VideoSuggestionCard