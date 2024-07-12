import React, { useEffect, useState } from 'react'
import img from "../../assets/images/noAssignment.jpg"
import axios from '../../api/axios'
import AssignmentCard from './assignmentCard'
import useContextApi from '../../contextAPI/useContextApi'
const ShowAssignments = () => {

    const {assignments,setAssignments,isAssignment,setIsAssignment,loadAssignment,setLoadAssignment} = useContextApi()
    const loadAssignments = async() => {
        try{
            const res = await axios.get("/trainer/assignments")
            if(res.data.status){
                setAssignments(res.data.assignments);
                setIsAssignment(true)
            }
            else{
                setIsAssignment(false)
                console.log(res.data.message);
            }
            setLoadAssignment(false)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        loadAssignments()
    },[loadAssignment])
    return (
        <div className="flex flex-col justify-center items-start p-5 w-[90%] mt-6 h-auto border-2 rounded-md shadow-lg mx-auto">
            <div className='flex justify-center items-center mx-auto'>
            <h1 className="font-bold text-4xl text-center">{isAssignment?"All assignments":"No assignments found"}</h1>
            </div>
            <div className={`${isAssignment?"hidden":""} flex justify-center items-center p-2 mx-auto w-[40%] h-auto`}>
                <img src={img} alt='' />
            </div>
            <div className='flex justify-center items-start p-3 mt-5'>
                {assignments.map((assignment,index) => {
                    return(
                        <div key={index} className='px-3' >
                            <AssignmentCard assignment = {assignment} index= {index} />
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default ShowAssignments