import { useState } from "react";
import Sidebar  from  "../components/dashboard/sidebar";
// import { Assessments } from "./Assessments";
import { FaAngleDoubleRight,FaBell } from "react-icons/fa";
// import Analytics from "./analytics";
// import Assignment from "./Assignments/Assignment";
import { Avatar} from 'antd';
// import logo from "../assets/image/logo.svg";



export default function Dashboard(){
    const [showCard, setShowCard] = useState("Analytics");
    const [showSideBar, setShowSideBar] = useState(true);

    return(
        <>
          <div className="bg-white lg:pl-[20%] w-screen min-h-screen lg:block">
          <div className="px-4 lg:pr-8 w-full flex justify-between pt-4 items-center">
            {/* <img src={logo} className="translate-x-6 lg:translate-x-0" alt="" /> */}
            <div className="flex gap-3">
            <h1 className="hidden md:text-3xl md:block">Student Dashboard</h1>

            </div>
            <div className="flex justify-around items-center gap-5 bg-gradient-to-r from-blue-500 to-teal-200 px-3 md:px-8 py-1 md:py-2 rounded-md  ">
                <Avatar size={35} style={{ fontWeight:600, backgroundColor: '#fde3cf', color: '#f56a00'}}>
                  {/* {studentData?.name[0]} */}
                </Avatar>
              <h1 className="md:text-white md:text-xl md:font-semibold hidden md:block">
                {/* {studentData?.name} */}
              </h1>
              <FaBell size={25}></FaBell>
          </div>
          </div>
          <button onClick={()=>{setShowSideBar(!showSideBar)}} className={`fixed ${showSideBar?"hidden":""} top-4 left-3`}><FaAngleDoubleRight className="ml-auto text-2xl"/></button>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} showCard={showCard} setShowCard={setShowCard} className="bg-white"/>
            <div className="w-full min-h-screen px-5 py-10">
              <div className={showCard=="Analytics"?"":"hidden "}>
                {/* <Analytics/> */}
              </div>
              <div className={showCard=="Assessments"?"":"hidden "}>
                {/* <Assessments setShowSideBar={setShowSideBar}/> */}
              </div>
              {/* <h1 className={showCard=="Assignments"?"":"hidden "}><Assignment/></h1> */}
              <h1 className={showCard=="Attendance"?"":"hidden "}>Attendence</h1>
            </div>
          </div>  
        </>
    );
}