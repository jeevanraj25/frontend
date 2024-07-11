import React, { useEffect, useState } from "react";
import LineGraphs from "./lineGraphs";
import axios from "../../api/axios";
import TotalStudents from "./totalStudents";
import TopPerfromers from "./topPerfromers";
import WelcomeCard from "./welcomeCard";
import TotalBatches from "./totalBatches";
import Loading from "../loading/Loading";


const BatchWiseAnalytics = () => {
  const [batchWiseData, setBatchWiseData] = useState({});
  const [totalStudent, setTotalStudent] = useState(0);
  const [topPerformers, setTopPerformers] = useState([]);
  const [totalBatch, setTotalBatch] = useState(0)
  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    try {
      setLoading(true)
      const bacthData = await axios.get("/");
      const totalStudends = await axios.get("/studentTotal");
      const topPerformer = await axios.get("/topPerformers");
      // const universityname =await axios.get("/universityname");
      
      setLoading(false)
      setBatchWiseData(bacthData.data);
      setTotalStudent(totalStudends.data.total);
      setTopPerformers(topPerformer.data);
      setTotalBatch(bacthData.data.assessmentsArray[0].labels.length)
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Empty dependency array to fetch data once on mount

  console.log("batchWiseData:", batchWiseData); // Log batchWiseData for debugging

  return (
      <div className="px-5 py-3 flex flex-col justify-center items-center">
        {loading? <Loading /> : (
          <>
        <div className="flex flex-1 w-[90%]  py-2 mx-auto my-4 h-screen">
          <WelcomeCard trainerName={"Trainer Name 👋"}/>
        </div>
        <div className="flex flex-1 p-5 w-[90%] h-auto border rounded-md shadow-lg mx-auto">
          <div className="flex flex-col w-[68%] h-auto items-center justify-center mx-auto">
            <h1 className="font-bold text-4xl">Batch Analytics</h1>
            <div className="flex justify-center items-center w-full h-full px-5 py-5 my-5 border-2 rounded-lg">
              {/* Conditionally render LineGraphs if batchWiseData exists */}
              {Object.keys(batchWiseData).length > 0 && (
                <LineGraphs batchWiseData={batchWiseData} />
              )}
            </div>
          </div>
          <div className="ml-7 px-5 w-[30%]">
            <div className="py-2 ">
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
        </>
        )}
      </div>
  );
};

export default BatchWiseAnalytics;
