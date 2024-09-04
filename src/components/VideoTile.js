import React from 'react'

const VideoTile = ({title, overview}) => {
  return (
    <div className=' w-screen  aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
        <div className='my-2 md:m-0'>
        <button className='bg-white text-black p-4 px-3 py-1 md:py-4 md:px-12 text-lg rounded-lg hover:opacity-80'>  ▷  Play</button>
        <button className='bg-gray-500 hidden md:inline-block text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg mx-2'>More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTile
