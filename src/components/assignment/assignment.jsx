import React, { useState } from 'react'
import AddAssignment from './addAssignment'
import ShowAssignments from './showAssignments'

const Assignment = () => {
    
    return (
    <div className='px-5 py-3 flex flex-col justify-center items-center'>
        <AddAssignment />
        <ShowAssignments />
    </div>
  )
}

export default Assignment