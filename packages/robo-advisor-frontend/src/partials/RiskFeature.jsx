import { useEffect, useState } from 'react';

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
import Section from 'components/Section';
import makeRequest from 'utils/api';
import SvgRiskprofile from 'assets/images/Riskprofile';
import { RiskScoreData } from 'utils/data';
import TextCard from 'components/TextCard';
import Spinner from 'assets/images/Spinner';

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

const RiskFeature = () => {
  const [data, setData] = useState([
    { _id: '', __v: '', createdAt: '', updatedAt: '' },
  ]);
  const [openToast, setOpenToast] = useState(false);
  const { _id, __v, createdAt, updatedAt, riskScore, ...graphData } = data[0];
  const [selected, setSelected] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const textData = selected && RiskScoreData[selected - 1];
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
    if (openToast) {
      setTimeout(() => {
        setOpenToast(false);
      }, 3000);
    }
    const fetchData = async () => {
      const url = selected
        ? `instrument-weight?score=${selected}`
        : 'instrument-weight';
      try {
        const data = await makeRequest('get', url);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selected, openToast]);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    setLoading(true);
    makeRequest('post', 'bulk-load', formData, config)
      .then((response) => {
        setOpenToast(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      {openToast && (
        <button
          type="button"
          x-show="open"
          className="fixed right-4 top-24 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
        >
          <div class="flex items-center space-x-2">
            <p class="font-bold">Item Created Successfully!</p>
          </div>
        </button>
      )}
      <Section title="RoboAdvisor feature for Your Convinience">
        <div className="flex w-full items-center ">
          <div className="w-[50%] h-full">
            <SvgRiskprofile setSelected={setSelected} />
          </div>
          <div className="w-[50%] bg-[#dbf2e4] p-8">
            <Chart type="bar" data={graph} />
            <div className="my-4 flex justify-between items-center">
              <label className="block">
                <span className="sr-only">Choose File</span>
                <input
                  type="file"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </label>
              {file && (
                <button
                  className={` w-fit text-white bg-[#2FB574] p-3 rounded-lg btn  `}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                  {loading && (
                    <span>
                      <Spinner />
                    </span>
                  )}
                </button>
              )}
            </div>

            {selected && <TextCard data={textData} />}
          </div>
        </div>
      </Section>
    </>
  );
};

export default RiskFeature;
