import React, { useEffect } from 'react';
import user from '../../Images/utube.png';
import { Link, useSearchParams } from 'react-router-dom';

function SearchVideoCard({info}) {

    const {snippet, id}=info;
    const { thumbnails, title, channelTitle, description}= snippet;

  
  return (
    <div className=' mb-8 sm:mb-0'>

        <Link to={id.videoId ? ('/watch?v='+ id.videoId ) : '?q=telugusongs'} className='flex ml-3 sm:m-6 sm:ml-0 flex-col sm:flex-row items-start w-[100%]'>
        <img
            src={thumbnails.high.url}
            className='  min-h-40 h-[196px] w-[342px] sm:h-52 sm:w-96 rounded-xl object-cover transition-all duration-300 ease-in-out hover:rounded-none sm:mr-3' 
          />
          <div>
            
          <h1 className=' text-sm font-semibold line-clamp-2 sm:text-lg text-gray-700 px-2'>{title}</h1>
          <div className='flex items-center px-2'>
            <img src={user} className=' h-8 '/>
            <p className=' text-sm ml-1  text-gray-700'>{channelTitle}</p>
          </div>
          <p className=' max-w-2xl text-xs px-2'> {description}</p>
          </div></Link>
          
    </div>
  )
}

export default SearchVideoCard