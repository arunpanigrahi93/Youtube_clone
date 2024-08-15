import React, { useEffect, useState } from 'react'
import user from '../Images/user.webp';
import { AiOutlineLike, AiOutlineDislike  } from 'react-icons/ai';
import { key } from '../utils/config';


function Comments({id}) {
    const [comments, setComments]= useState([]);
    const [isHidden, setIsHidden]=useState(true)
 
    const getComments= async()=>{
        const data= await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${key}`);

        const jsonData = await data.json();
        setComments(jsonData);
    }
   
    useEffect(() => {
        getComments();
      }, [id]);

      const flippedStyle = {
        transform: 'scaleX(-1)',
      };

      const showReply=()=>
      {
        setIsHidden(!isHidden)
      }

      
  return (
    <div className=' hidden sm:block'>
        <h1 className=' font-bold m-2'>Comments</h1>
        {comments.items &&  Object.values(comments.items).map((item) => (
        <div className='flex m-2' key={item.id}>
          {
           (item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl) !==null ?
            <img src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="user" className='w-12 mt-2 cursor-pointer self-start rounded-full m-2' /> :
            <img src={user} alt="issue-user" className='w-12 mt-2 cursor-pointer self-start rounded-full m-2' />
            }

        <div >
        <p className=' font-semibold mt-2 mb-1 '>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
        <p >{item?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
        <div className='flex my-2 mr-2'>
          <AiOutlineLike size={20}  className='mr-2'/> {(item?.snippet?.topLevelComment?.snippet?.likeCount) ==0 ? "" : (item?.snippet?.topLevelComment?.snippet?.likeCount)}
        <AiOutlineDislike size={20} style={flippedStyle} className='mx-2'/> 
        <p className='mx-2 font-semibold text-sm'> Reply</p>
        </div>
        {
          (item?.replies)? <div className=' cursor-pointer mx-2 ml-10 text-sky-600 flex flex-col font-semibold' onClick={()=>showReply()}> replies
          <div className={`${isHidden? "hidden" : ''} text-black`} > {
            item?.replies?.comments.map((item)=>(
              <div key={item.id}>
              <div className='flex'> <img src={item?.snippet?.authorProfileImageUrl} alt='reply' className='w-7 mt-2 cursor-pointer self-start rounded-full mx-2'/>
              <p  className=' font-semibold mt-2 mb-1 '>{item?.snippet?.authorDisplayName}</p>
              </div>
              <p className='ml-12 mb-2 font-normal'>{item?.snippet?.textOriginal}</p> </ div>
              ))
              
          }</div>
          </div>: ''  }
        
        </div>
        </div>
           ))
        }
    </div>
  )
}

export default Comments