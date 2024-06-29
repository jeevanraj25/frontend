import { useState } from "react";
import Sidebar  from  "../components/dashboard/sidebar";
// import { Assessments } from "./Assessments";
import { FaAngleDoubleRight,FaBell } from "react-icons/fa";
// import Analytics from "./analytics";
// import Assignment from "./Assignments/Assignment";
import { Avatar} from 'antd';
import BatchWiseAnalytics from "../components/dashboard/batchWiseAnalytics";
// import logo from "../assets/image/logo.svg";



export default function Dashboard(){
    const [showCard, setShowCard] = useState("Dashboard");
    const [showSideBar, setShowSideBar] = useState(true);

    return(
        <>
          <div className="bg-white lg:pl-[20%] w-full lg:block">
          <div className="px-4 lg:pr-8 w-auto flex justify-between pt-4 items-center">
            {/* <img src={logo} className="translate-x-6 lg:translate-x-0" alt="" /> */}
            <div className="flex gap-3">

            </div>

          </div>
          <button onClick={()=>{setShowSideBar(!showSideBar)}} className={`fixed ${showSideBar?"hidden":""} top-4 left-3`}><FaAngleDoubleRight className="ml-auto text-2xl"/></button>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} showCard={showCard} setShowCard={setShowCard} className="bg-white"/>
            <div className="w-full  px-5 py-10">
              <div className={showCard=="Dashboard"?"":"hidden "}>
                <BatchWiseAnalytics />
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