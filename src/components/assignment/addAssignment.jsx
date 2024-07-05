import {useState} from 'react'
import { FaPlus } from "react-icons/fa";
import NewAssignment from './NewAssignment';

const AddAssignment = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <div className="flex flex-col justify-center items-center p-5 w-[90%] mt-6 h-auto border-2 rounded-md shadow-lg mx-auto">
        <h1 className="font-bold text-4xl">Add New Assignment</h1>
        <div className='mt-5'>
            <button onClick={() => setIsOpen(true)} className='flex justify-center items-center px-3 py-2 text-xl font-semibold text-white bg-[#009eb0] rounded-lg'><span className='mr-2'><FaPlus /></span>Add</button>
        </div>
        <NewAssignment isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default AddAssignment