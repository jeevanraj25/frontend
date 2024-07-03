import LinearProgress from '@mui/material/LinearProgress';
import logo  from "../../assets/images/logo.svg"
const Loading = () => {
  return (
    <div className='fixed top-0 left-20 right-0 bottom-0 p-3 bg-black w-screen h-screen bg-opacity-55'>
      <div className='p-5 w-fit m-auto border-[2px] h-fit rounded-lg shadow-2xl bg-white'>
          <img src={logo} alt='' className='m-auto px-5 py-2 max-w-[300px] w-full' />
          <h1 className='text-3xl font-bold text-[#59B4C3] text-center p-5'>Loading Data From Backend</h1>
          <div className='max-w-[380px] m-auto'>
            <LinearProgress />
          </div>
      </div>
    </div>
  )
}

export default Loading