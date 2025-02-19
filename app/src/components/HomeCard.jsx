import React from 'react'

const HomeCard = ({ title, description, backgroundImage }) => {
  return (
    <div 
      className="flex-1 text-center h-1/2"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-black bg-opacity-20 h-full w-full p-12 flex flex-col items-center justify-center transition-all hover:bg-opacity-40 rounded-md">
      <h3 className="text-white mb-8 mt-8" >{ title }</h3>
      <p className="text-white text-2xl">{ description }</p>
      </div>
    </div>
  )
}

export default HomeCard