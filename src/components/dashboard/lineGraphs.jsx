import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

const LineGraphs = (props) => {
  // Extract data and labels from batchWiseData

  const { assessmentsArray } = props.batchWiseData;
  const data1 = {
    labels: assessmentsArray[0].labels,
    datasets: [
      {
        label: assessmentsArray[0].assessmentName,
        data: assessmentsArray[0].data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 3,
        fill: true,
      },
      // You can add more datasets here if needed
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Assessment Data Line Chart',
      },
    },
  };

  return (
    <LineChart data={data1} options={options} />
  );
};

export default LineGraphs;