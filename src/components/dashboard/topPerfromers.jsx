import React from 'react'

const TopPerfromers = ({topPerformers}) => {
  return (
    <div className='flex flex-col justify-start items-center h-[42vh]  border-2 rounded-xl '>
        <h1 className='text-3xl font-bold px-7 py-2'>Top 5 Performers</h1>
        {topPerformers.map((value,index) => {
            return(
                <div key={index}>
                    <h2 className='text-2xl font-semibold px-5 py-2'>{value.name}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default TopPerfromers