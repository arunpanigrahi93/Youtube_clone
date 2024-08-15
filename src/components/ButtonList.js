import React from 'react'

function ButtonList() {

    const list= ['All', "Movies" , "Cricket", "Soccer", "Music", "Songs", "Cooking", "Gaming", "Live", "Recently uploaded"]
  return (
   
    list.map((item, index)=>
    <button key={index} className=' hidden sm:inline bg-gray-100 font-semibold rounded-lg px-3 py-1 mt-4 m-4 -my-1'>{item}</button>)
  )
}

export default ButtonList