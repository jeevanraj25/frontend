import React, { useEffect, useState } from "react";
import ChooseAnalytics from "./ChooseAnalytics";
import axios from "../../api/axios";
import LineGraphs from "./lineGraphs";
import Loading from "../loading/Loading";

const Analytics = () => {
  const [Type, SetType] = useState("Overallcommunucation");

  const [communication, setCommunication] = useState({});
  const [grammar, setGrammar] = useState({});
  const [percentile, Setpercentile] = useState({});
  const [Analytics, Setanalytics] = useState({});
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const communicationData = await axios.get("/trainer/communucation");
      const grammarData = await axios.get("/trainer/grammer");
      const percentileData = await axios.get("/trainer/percentile");

      setLoading(false);
      setCommunication(communicationData.data);
      setGrammar(grammarData.data);
      Setpercentile(percentileData.data);
      Setanalytics(communicationData.data);
      // console.log(communicationData);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (Type === "Overallcommunication") {
      Setanalytics(communication);
    } else if (Type === "grammar") {
      Setanalytics(grammar);
    } else if (Type === "percentile") {
      Setanalytics(percentile);
    }
  }, [Type, communication, grammar, percentile]);

  return (
    <div className="flex w-[90%] h-screen px-5 py-1 flex-col justify-center items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
        
        <div className="flex justify-center items-center w-full h-[80%]">
  <div className="w-full max-w-7xl px-8 py-8 my-10 border rounded-md shadow-md">
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center border rounded-md shadow-md px-5 py-2 my-1">
        <ChooseAnalytics SetType={SetType} />
      </div>
      <div className="border rounded-md shadow-md px-5 py-5 my-5">
        {Object.keys(Analytics).length > 0 && (
          <LineGraphs Analytics={Analytics} />
        )}
      </div>
    </div>
  </div>
</div>


        </>
      )}
    </div>
  );
};

export default Analytics;
