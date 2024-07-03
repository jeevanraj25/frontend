import React, { useEffect, useState } from "react";
import LineGraphs from "./lineGraphs";
import axios from "../../api/axios";
import TotalStudents from "./totalStudents";
import TopPerfromers from "./topPerfromers";
import WelcomeCard from "./welcomeCard";
import TotalBatches from "./totalBatches";

const BatchWiseAnalytics = () => {
  const [batchWiseData, setBatchWiseData] = useState({});
  const [totalStudent, setTotalStudent] = useState(0);
  const [topPerformers, setTopPerformers] = useState([]);
  const [totalBatch, setTotalBatch] = useState(0)
  const [universityName,setUniversityName] =useState("");
  

  const loadData = async () => {
    try {
      const bacthData = await axios.get("/trainer");
      const totalStudends = await axios.get("/trainer/studentTotal");
      const topPerformer = await axios.get("/trainer/topPerformers");
       const universityname =await axios.get("/trainer/universityname");
      const  arr  = bacthData.data
      setBatchWiseData(bacthData.data);
      setTotalStudent(totalStudends.data.total);
      setTopPerformers(topPerformer.data);
      setTotalBatch(bacthData.data.assessmentsArray[0].labels.length)
      console.log(arr.assessmentsArray[0].labels);
       setUniversityName(universityname.data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Empty dependency array to fetch data once on mount

  console.log("batchWiseData:", batchWiseData); // Log batchWiseData for debugging

  return (
      <div className="p-5 flex flex-col justify-center items-center">
        <div className="flex flex-1 w-[68vw]  py-2 mx-auto my-4">
          <WelcomeCard universityName = {universityName} trainerName={"Trainer Name"}/>
        </div>
        <div className="flex flex-1 p-5 w-[68vw] h-auto border rounded-md shadow-lg mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">Basic Analytics</h1>
            <div className="flex justify-center items-center w-[45vw] h-[48vh] px-5 py-5 my-5 border-2 rounded-lg">
              {/* Conditionally render LineGraphs if batchWiseData exists */}
              {Object.keys(batchWiseData).length > 0 && (
                <LineGraphs batchWiseData={batchWiseData} />
              )}
            </div>
          </div>
          <div className="ml-10 px-5">
            <div className="py-2">
              <TotalStudents total={totalStudent} />
            </div>
            <div className="py-2">
              <TotalBatches totalBatch={totalBatch} />
            </div>
            <div className="py-3">
              <TopPerfromers topPerformers={topPerformers} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default BatchWiseAnalytics;
