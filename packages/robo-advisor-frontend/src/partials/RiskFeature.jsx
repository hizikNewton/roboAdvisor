import SvgRiskprofile from '../assets/images/Riskprofile';
import React, { useEffect, useState } from 'react';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import Section from 'components/Section';
import makeRequest from 'utils/api';
import Risk from './Risk';

type Props = {};

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const RiskFeature = (props: Props) => {
  const [data, setData] = useState([{}]);
  const [{ _id, __v, createdAt, updatedAt, ...graphData }] = data;
  const graph = {
    labels: Object.keys(graphData),
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: Object.values(graphData),
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: Object.values(graphData),
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeRequest('get', 'instrument-weight?score=8');
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Section>
      <div className="flex w-full">
        <div className="w-[50%]">
          {/* <SvgRiskprofile /> */}
          <Risk />
        </div>
        <div className="w-[50%]">
          <Chart type="bar" data={graph} />
          <div>
            <button className="w-full mb-4 text-white bg-blue-600 btn hover:bg-blue-700">
              Try with your dataset
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RiskFeature;
