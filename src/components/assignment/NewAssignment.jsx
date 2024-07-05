import axios from '../../api/axios'
import {useEffect, useState} from 'react'
import CSVReader from 'react-csv-reader'
import { toast } from 'react-toastify'

const NewAssignment = ({ isOpen, setIsOpen }) => {
	const [csvData, setCsvData] = useState(null)
	const [data, setData] = useState({
		title:"",
		endDate:"",
		type:"mcq",
  })
  const [formError, setFormError] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
	const {name,value} = e.target
	setData({...data,[name]:value})
	setFormError({...formError,[name]:""})

  }

  const handleCSV = (csv_data,fileinfo) => {
	setFormError({...formError,["csvData"]:""})
	if(!(fileinfo.type.includes("\csv")))
		alert("Please upload a CSV file")
	else
		setCsvData(csv_data)
  }

  const handleValidation = (data) => {
	const error = {}

	if(!data.title){
		error.title = "Please Enter Title"
	}
	if(!data.endDate){
		error.endDate = "Please Enter Date"
	}
	if(!csvData){
		error.csvData = "Please Upload CSV File"
	}
	return error
  }

  const handleSubmit = (e) =>{
	e.preventDefault()
	setFormError(handleValidation(data))
	setIsValid(true)
  }

  const handleClose = () => {
	setIsValid(false)
	setFormError({})
	setIsOpen(false)
  }

  const handlePost = async () => {
	try{
		const newAssignment = {
			title:data.title,
			endDate:data.endDate,
			type:data.type,
			assignment:csvData.filter((value,index) => index<csvData.length-1)
		}
		console.log(newAssignment);
		const res = await toast.promise(
			axios.post("/trainer/assignment",newAssignment),
			{
				pending: 'Uploading',
				success: 'Uploaded Successfully',
				error: 'Rejected 🤯'
			}
		)
	}
	catch(err){
		console.log(err);
	}
  }

  useEffect(()=>{
	if(Object.keys(formError).length===0&&isValid)
		handlePost()
  },[formError])

  if (!isOpen) return null;
	return (
	<div className='fixed inset-0 z-50 flex items-center justify-center text-xl overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gray-500 bg-opacity-75' >
	<div className="relative w-auto max-w-lg mx-auto my-6 h-[80vh]" >
	<div className='p-3 flex justify-center items-center'>
		<div className='p-3 flex flex-col bg-white font-semibold border-2 w-auto min-h-[50vh] h-auto rounded-lg'>
			<h1 className='text-2xl text-center mb-2'>Assignment Details</h1>
			<div className='flex flex-col px-2 py-1'>
				<label className='py-1'>Enter Assignment Title</label>
				<input name="title" type='text' className={`p-1 border-2 rounded-lg my-1 ${formError.title?"border-red-500":""}`} placeholder='Title' value={data.batchName} onChange={handleChange} />
				<p className='text-red-500 text-md font-semibold ml-1'>{formError.title}</p>
			</div>
			<div className='flex flex-col px-2 py-2'>
				<label className='py-1'>End Date</label>
				<input name="endDate" className={`p-1 border-2 rounded-lg my-1 ${formError.endDate?"border-red-500":""}`} type='date' value={data.startDate} onChange={handleChange} />
				<p className='text-red-500 text-md font-semibold ml-1'>{formError.endDate}</p>
			</div>
			<div className='flex flex-col px-2 py-2'>
				<label className='py-1'>Choose assignment type</label>
				<div className='flex my-1'>
					<div className='flex justify-start items-center mr-2'>
						<input name="type" className={`w-5 h-5 text-blue-600 `} type='radio' checked={data.type==="mcq"} value="mcq" onChange={handleChange} />
						<label className='px-2'>MCQ</label>
					</div>
					<div className='flex justify-start items-center'>
						<input name="type" className={`w-5 h-5 text-blue-600 `} type='radio' checked={data.type==="fillInTheBlanks"} value="fillInTheBlanks" onChange={handleChange} />
						<label className='px-2'>Fill in the blanks</label>
					</div>
				</div>
			</div>
			<div className={`flex flex-col justify-center px-2 py-3`}>
				<CSVReader cssClass='border' onFileLoaded={(csv_data,fileinfo) => handleCSV(csv_data,fileinfo)} />
				<p className='text-red-500 text-md font-semibold ml-1'>{formError.csvData}</p>
			</div>
			<div className='flex flex-col px-2'>
				<button className='px-3 py-2 my-2 bg-[#009eb0] text-white rounded-lg' onClick={handleSubmit}>Submit</button>
				<button className='px-3 py-2 my-2 w-full bg-red-500 text-white rounded-lg' onClick={handleClose}>Close</button>
			</div>
			
		</div>
	</div>
	</div>
	</div>
  )
}

export default NewAssignment