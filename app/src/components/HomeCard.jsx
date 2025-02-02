import React from 'react'

const HomeCard = ({ title, description, icon }) => {
  return (
    <div className='flex-1 p-12 text-center border-solid border-b-[1px] border-slate-500 h-1/2'>
      <h3 className=''>{ title }</h3>
      <p className=''>{ description }</p>
      <div className='justify-self-center h-14 w-14 mt-40'>{ icon }</div>
    </div>
  )
}

export default HomeCard