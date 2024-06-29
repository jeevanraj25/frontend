import React, { useEffect, useState } from 'react';
import LineGraphs from './lineGraphs';
import axios from '../../api/axios';
import TotalStudents from './totalStudents';
import TopPerfromers from './topPerfromers';

const BatchWiseAnalytics = () => {
  const [batchWiseData, setBatchWiseData] = useState({});
  const [totalStudent, setTotalStudent] = useState(0)
  const [topPerformers, setTopPerformers] = useState([])
  const loadData = async () => {
    try {
      const bacthData = await axios.get('/trainer');
      const totalStudends = await axios.get('/trainer/studentTotal')
      const topPerformer = await axios.get('/trainer/topPerformers')
      setBatchWiseData(bacthData.data);
      setTotalStudent(totalStudends.data.total)
      setTopPerformers(topPerformer.data)
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Empty dependency array to fetch data once on mount

  console.log('batchWiseData:', batchWiseData); // Log batchWiseData for debugging

  return (
    <div className='p-5 flex justify-center items-center'>
      <div className='flex p-5 w-fit h-auto border rounded-md shadow-lg'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-4xl'>Basic Analytics</h1>
          <div className='flex justify-center items-center w-[50vw] h-[50vh] px-7 py-5 my-5 border-2 rounded-lg'>
            {/* Conditionally render LineGraphs if batchWiseData exists */}
            {Object.keys(batchWiseData).length > 0 && (
              <LineGraphs batchWiseData={batchWiseData} />
            )}
          </div>
        </div>
        <div className='ml-10 px-5'>
          <div className='py-2'>
            <TotalStudents total = {totalStudent} />
          </div>
          <div className='py-3'>
            <TopPerfromers topPerformers = {topPerformers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchWiseAnalytics;
