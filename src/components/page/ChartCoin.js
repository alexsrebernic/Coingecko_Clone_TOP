import React, { useEffect, useState, useCallback } from "react";

import { getHistoricalMarketData } from "../services/CoinServices";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const ChartCoin = (props) => {
    let [historicData,setHistoricalData] = useState([])
    const [flag,setflag] = useState(false);
    useEffect(() => {
        ( async () => {
            let data = await getHistoricalMarketData(props.id,props.date)
            setHistoricalData(data.prices)
            setflag(true);
        })()
    },[props.date])
  

    return(
    <div id={props.id} className="w-full h-full">
    {historicData.length !== 0?(
      <div >
      <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return props.date === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${props.date} Days ) in USD`,
                    borderColor: "#7cb5ec",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
      </div>
    ):(
      <h1>
        Loading Chart...
      </h1>
    )}
       
    </div>
    )
}
export default ChartCoin