import React from 'react'

const HomeCard = () => {
  return (
    <div className='flex-1 p-12 text-center border-solid border-b-[1px] border-slate-500 h-1/2'>
      <h3 className=''>Card1</h3>
      <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita natus mollitia laudantium eos illum amet deleniti nesciunt molestiae, culpa qui eaque officiis voluptatem sequi facilis nulla odio cumque atque corrupti.</p>
      <div className='justify-self-center m-10 w-14 h-14 '>
        <svg className='cursor-pointer hover:fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
      </div>
    </div>
  )
}

export default HomeCard