import React from 'react'

const TotalStudents = ({total}) => {
  return (
    <div className='flex flex-col justify-center items-center border-2 rounded-xl '>
        <h1 className='md:text-3xl text-xl font-bold px-7 py-2'>Total Students</h1>
        <h2 className='text-2xl font-semibold px-5 py-2'>{total}</h2>
    </div>
  )
}

export default TotalStudents