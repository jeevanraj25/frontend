import React, { useState } from 'react'
import AssignmentPreviewTemplate from './assignmentPreviewTemplate';

const AssignmentCard = ({assignment,index}) => {
    const formattedDate = new Date(assignment.endDate).toLocaleDateString();
    const [showPreview, setShowPreview] = useState(false)
    return (
    <div className='flex flex-col justify-center items-center border-2 shadow-md rounded-md px-3 py-2 '>
        <div className='mx-5'>
            <h1 className='font-bold text-2xl py-3'>Assignment No. {index+1}</h1>
            <h2 className='font-semibold text-xl py-2'>Title : {assignment.title}</h2>
            <h2 className='font-semibold text-xl py-2'>End Date : {formattedDate}</h2>
        </div>
        <div className='px-5 py-3 mt-2'>
            <button onClick={() => setShowPreview(true)} className='px-3 py-2 font-semibold rounded-lg text-white text-lg bg-[#009eb0]'>Preview</button>
        </div>
        {showPreview&&<AssignmentPreviewTemplate assignment={assignment} setShowPreview = {setShowPreview} />}
    </div>
  )
}

export default AssignmentCard