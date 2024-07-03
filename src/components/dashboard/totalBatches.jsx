import React from 'react'

const TotalBatches = ({totalBatch}) => {
  return (
    <div className='flex flex-col justify-center items-center border-2 rounded-xl '>
        <h1 className='md:text-xl text-xl font-bold px-7 py-2'>Total Batches</h1>
        <h2 className='text-xl font-semibold px-5 py-2'>{totalBatch}</h2>
    </div>
  )
}

export default TotalBatches