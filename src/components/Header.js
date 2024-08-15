import React, { useState } from 'react'
import menu from '../Images/menu.png'
import youtube from '../Images/YouTube.png'
import user from '../Images/user.webp'    
import { AiOutlineSearch } from 'react-icons/ai';
import { toggleState } from '../store/HamburgerSlice';
import {useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    const dispatch= useDispatch();
    const [searchQuery, setSearchQuery]= useState("");

    const navigate=useNavigate();

    const menuBarSet=()=>{
        dispatch(toggleState());
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            navigate(`/search?q=${searchQuery}`)
    }
    

  return (
    <div className=' fixed grid grid-flow-col p-3 shadow-lg w-full z-10  bg-white top-0 left-0 items-center'>
        <div className='flex col-span-1'>
            <img src={menu} alt="menu" className=' h-6 mx-4 mt-2 cursor-pointer  hidden sm:block' onClick={() => menuBarSet()}/>
            
            <a href='/'  alt="YouTube Home">
            <img src={youtube} alt="youtube-icon" className='h-[21px] -ml-1 sm:ml-2 mt-[10px] cursor-pointer w-[94px] max-w-[94px]'/>
            </a>

        </div>

        
        <div className='flex justify-center col-span-10 ' >

        <form  onSubmit={handleSubmit} className='w-9/12 sm:w-6/12 flex justify-center'>
        <input type='text' placeholder='Search' className=' w-4/5 sm:w-4/5 py-2 h-[30px] sm:h-[38px]  pl-4 border border-gray-500 rounded-l-full ' onChange={(e)=>setSearchQuery(e.target.value)}/>
         <button className=' px-1 border py-2 sm:px-4 border-gray-500 rounded-r-full  h-[30px] sm:h-[38px]  bg-gray-100 hover:bg-gray-200 self-center' >
        <AiOutlineSearch size={25}  className='pb-[6px]' /></button> 
        </form>
        </div>

        <div className=' col-span-1  hidden  sm:block'>
            <img src={user} alt="user" className=' w-12 mt-2  cursor-pointer'/>
        </div>
    </div>
  )
}

export default Header