import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Sidebar() {

  const isMenuOpen= useSelector(store=> store.menubar.isMenuOpen)

  return !isMenuOpen ? "": (<>
  
  <div className=' lg:mr-60 mr-0'></div>
    <div className='hidden lg:block col-span-1 shadow-lg w-48 fixed bg-white h-full p-7 mx-4 mb-4 min-h-dvh top-0 pt-20 '>
      <>
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </>

      <>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </>

      <>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </>
    </div></>
  );
}

export default Sidebar;
