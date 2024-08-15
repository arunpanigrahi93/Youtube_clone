
import Header from './Header';
import Maincontainer from './Maincontainer';
import Sidebar from './Sidebar';
import {Outlet } from 'react-router-dom'; 

function Body() {
  return (
    <div className=' grid grid-flow-col mt-16 w-full'>
      <Header />
      <Sidebar />
      <Outlet/> 
      {/**
      <Maincontainer />*/}
    </div>
  )
}

export default Body