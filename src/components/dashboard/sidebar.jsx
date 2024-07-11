import {SiGoogleanalytics } from "react-icons/si";
import {MdAssignment,MdOutlineAssessment} from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import {motion} from "framer-motion";
import logo from "../../assets/images/yuvamytr_favicon.svg"
import Cookies from 'js-cookie' ;
import { useState } from "react";





export default function Sidebar({showCard, setShowCard})
{
    


    const handleLogout = () => {
        // console.log("Before Deletion:", document.cookie);
    
        // // Remove the "authToken" cookie
        // Cookies.remove("authToken");
    
        // console.log("After Deletion:", document.cookie);
    
        // // Update the state to reflect the logout status
        // setIsLogOut(true);
    
        // // Redirect to the login page after a short delay
        // setTimeout(() => {
        //   navigate("/login");
        // }, 100);  // Adjust the delay as needed
      };
    
    const [showSideBar, setShowSideBar] = useState(true)

    

    return(
        <>
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: showSideBar ? "0" : "-100%" }}
                transition={{ duration: 0.5 }}
                className={`${showSideBar ? "" : "hidden"} bg-gradient-to-b from-[#004AAD] via-[#004AAD] via-50% to-[#62B8BD] text-white md:fixed z-10 lg:flex gap-1 flex-col pl-5 pt-4 fixed left-0 top-0 lg:w-[18%] h-screen job-details-container`}
            >
                <div className="flex justify-around mb-10">
                    <div className="flex  justify-start items-start text-left my-3">
                        <div className="my-auto mr-2">
                            {/* <img src={logo} alt="" /> */}
                        </div>
                        <div>
                            <h1 className="bg-gradient-to-b from-blue-500 to-teal-200 inline-block text-transparent bg-clip-text md:text-3xl">Yuvamytr</h1>
                            <h2 className=" text-white  text-sm flex md:text-2xl">ACE Tutor Dashboard</h2>
                        </div>
                        </div>
                    <button className="z-50 mb-4 relative px-2 lg:hidden font-bold">{showSideBar?<FaAngleDoubleLeft className="lg:hidden ml-auto text-2xl"/>:<FaAngleDoubleRight className="lg:hidden z-50 ml-auto text-2xl"/>}</button>
                </div>
                <button onClick={()=>setShowCard("Dashboard")} className={`${showCard=='Dashboard'?"font-semibold bg-white text-black":""} px-4 py-4 w-full text-left rounded-tl-md rounded-bl-md hover:shadow-sm hover:shadow-gray-600 flex items-center font-normal text-xl`}><SiGoogleanalytics className="mr-4 text-xl"/> Dashboard</button>
                <button onClick={()=>setShowCard("Assessments")} className={`${showCard=='Assessments'?"font-semibold bg-white text-black":""} px-4 py-4 w-full text-left rounded-tl-md rounded-bl-md  hover:shadow-sm hover:shadow-gray-600 flex items-center font-normal text-xl`}><MdOutlineAssessment className="mr-4 text-xl"/>Assessments</button>
                <button onClick={()=>setShowCard("Assignments")} className={`${showCard=='Assignments'?"font-semibold bg-white text-black":""} px-4 py-4 w-full text-left rounded-tl-md rounded-bl-md hover:shadow-sm hover:shadow-gray-600 flex items-center font-normal text-xl`}><MdAssignment className="mr-4 text-xl"/> Assignments</button>
                {/* <button onClick={()=>setShowCard("Attendence")} className={`${showCard=='Attendence'?"font-semibold bg-white text-black":""} px-4 py-4 w-full text-left rounded-tl-md rounded-bl-md hover:shadow-sm hover:shadow-gray-600 flex items-center font-normal`}><HiMiniUserGroup className="mr-4 text-xl"/> Attendence</button>  */}
                <button  className={`absolute float bottom-20 px-4 py-4 w-full text-left flex items-center justify-start font-normal hover:text-lg `} onClick={handleLogout}><IoIosLogOut className="mr-4 text-xl"/> Logout</button>             
            </motion.div>
        </>
    );
}     