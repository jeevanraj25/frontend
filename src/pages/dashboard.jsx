import { useEffect, useState } from "react";
import Sidebar  from  "../components/dashboard/sidebar";
// import { Assessments } from "./Assessments";
import { FaAngleDoubleRight,FaBell } from "react-icons/fa";
// import Analytics from "./analytics";
// import Assignment from "./Assignments/Assignment";
import { Avatar} from 'antd';
import BatchWiseAnalytics from "../components/dashboard/batchWiseAnalytics";
import Assignment from "../components/assignment/assignment";
import Assessment from "../components/assessment/Assessment"
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';



export default function Dashboard(){
    const [showCard, setShowCard] = useState("Dashboard");
    const [showSideBar, setShowSideBar] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      const token = Cookies.get('id');
      if(!token){
        navigate("/login")
      }
    })

    return(
        <>
          <div className="bg-white lg:pl-[20%] w-full lg:block">
          <button onClick={()=>{setShowSideBar(!showSideBar)}} className={`fixed ${showSideBar?"hidden":""} top-4 left-3`}><FaAngleDoubleRight className="ml-auto text-2xl"/></button>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} showCard={showCard} setShowCard={setShowCard} className="bg-white"/>
            <div className="w-full">
              <div className={showCard=="Dashboard"?"":"hidden "}>
                <BatchWiseAnalytics />
              </div>
              <div className={showCard=="Assessments"?"":"hidden "}>
                 <Assessment />
              </div>
              <div className={showCard=="Assignments"?"":"hidden "}>
                <Assignment />
              </div>
              {/* <h1 className={showCard=="Assignments"?"":"hidden "}><Assignment/></h1> */}
              <h1 className={showCard=="Attendance"?"":"hidden "}>Attendence</h1>
            </div>
          </div>  
        </>
    );
}