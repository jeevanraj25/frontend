import React from 'react'

const TopPerfromers = ({topPerformers}) => {
  return (
    <div className='flex flex-col justify-start items-center min-h-[46vh] h-full  border-2 rounded-xl '>
        <h1 className='md:text-3xl text-xl font-bold px-7 py-2'>Top 5 Performers</h1>
        {topPerformers.map((value,index) => {
            return(
                <div key={index}>
                    <h2 className='truncate md:text-2xl text-lg font-semibold px-5 my-2'>{value.name}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default TopPerfromers