import {useEffect, useState} from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/images/logo.svg"
import bg from "../assets/images/stdLoginBG.svg"
import {useNavigate} from "react-router-dom";
import axios from "../api/axios";
import Cookies from 'js-cookie';
import useContextApi from '../contextAPI/useContextApi';



const Login = () => {
    
    const {setIsLogOut} = useContextApi()
    const token = Cookies.get("id")
    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      };

    const navigate = useNavigate();
    
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    })
    const [showPass, setShowPass] = useState(false)

    const handlePassword = (e) => {
        e.preventDefault()
        setShowPass(!showPass)
    }

    const handleData = (e) => {
        const {name,value} = e.target
        setLoginData({...loginData,[name]:value})
    }

    async function login()
    {
        try {
            const res = await axios.post("/login/",{
            "role":"tutor",
            "email": loginData.email,
            "password": loginData.password
        });
        setIsLogOut(false);
        navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if(token){
            navigate("/")
        }
    })
    return (
    <>
        <div style={styles} className='p-3 w-screen h-screen mx-auto' >
            <div className='my-14'>
                <img src = {logo} alt="" className='mx-auto p-3 max-w-[400px] w-full' />
                <form className='max-w-[450px] w-full border-[2px] p-3 rounded-lg mx-auto bg-white'>
                    <h1 className='font-normal text-2xl text-center'>Login</h1>
                    <div className='flex flex-col py-2'>
                        <label className='pt-1 pb-2 font-normal text-xl'>Email</label>
                        <input required name='email' value={loginData.email} onChange={handleData} className='border-[2px] rounded-lg px-2 py-1' type='email' placeholder='Enter email' />
                    </div>
                    <div className='flex flex-col pt-1 pb-2'> 
                        <label className='pt-1 pb-2 font-normal text-xl'>Password</label>
                        <div className='flex gap-1'>
                            <input required name='password' value={loginData.password} onChange={handleData} className='w-full border-[2px] rounded-lg px-2 py-1' type={showPass?"text":"password"} placeholder='Enter password' />
                            <button className='border rounded-lg px-3 py-1' onClick={handlePassword}>{showPass?<AiOutlineEyeInvisible className='text-2xl' />:<AiOutlineEye className='text-2xl' />}</button>
                        </div>
                    </div>
                    <div className='flex justify-center py-2'>
                        <button type='button' onClick={()=>{login()}} className='px-4 py-2 text-lg font-normal text-white bg-cyan-500 rounded-lg'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login