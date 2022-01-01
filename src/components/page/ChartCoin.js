import React, { useEffect, useState, useCallback } from "react";
import { Chart} from "chart.js";

import { getHistoricalMarketData } from "../services/CoinServices";
const ChartCoin = (props) => {
    let [coinHistoricalMarketData,setCoinHistoricalMarketData] = useState([])
    const [chartNums, setChartNums] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    const [chartData, setChartData] = useState({});
    const [chart,setChart] = useState("")
    const x = [];
    const y = [];
    useEffect(() => {
        ( async () => {
            let data = await getHistoricalMarketData(props.id)
             setCoinHistoricalMarketData(data)
        })()
    },[])
   useEffect(() => {
    if(coinHistoricalMarketData && coinHistoricalMarketData.prices){
        for(let l = 0; l < coinHistoricalMarketData.prices.length; l++){
            let date = new Date(coinHistoricalMarketData.prices[l][0] * 1000).toLocaleString()
            x.push(date)
            y.push(coinHistoricalMarketData.prices[l][1])
            setChartLabels(x)
            setChartNums(y)
        }
    }
},[coinHistoricalMarketData])
    useEffect(() => {
        if(chartNums.length !== 0 && chartLabels.length !== 0){
            setChartData({
                labels: chartLabels,
                datasets: [
                  {
                    label: "$",
                    data: chartNums,
                    backgroundColor: ["rgba(0,0,0,0.09)"],
                    borderColor: 'black',
                    borderWidth: 4,
                    borderJoinStyle: "round",
                    borderCapStyle: "round",
                    pointRadius: 0,
                    pointHitRadius: 10,
                    lineTension: 0.2
                  }
                ]
              });
        }
    }, [chartNums, chartLabels])
 
    useEffect(() => {
        if(chartData.length !== 0 && chartLabels.length !== 0 && chartNums.length !== 0){
            let config = {
                type:'line',
                data:{chartData},
                options:{
                  responsive: true,
                  maintainAspectRatio: false,
                  title: { text: "ThickBoyz", display: false },
                  legend: { display: false },
                  layout: {
                    padding: {
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0
                    }
                  },
                  scales: {
                    xAxes: [{
                      display: false,
                      gridLines: {}
                    }],
                    yAxes: [{
                      display: false,
                      gridLines: {}
                    }]
                  },
                  tooltips: {
                    callbacks: {
                      //This removes the tooltip title
                      title: function () {}
                    },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: "nearest",
                    caretSize: 10,
                    backgroundColor: "rgba(255,255,255,.9)",
                    bodyFontSize: 15,
                    bodyFontColor: "#303030"
                  }
                }}
            if(document.getElementById("canvas") !== null){
                let ctx = document.getElementById("canvas").getContext('2d')
                if(chart){
                    chart.destroy()
                
                }
                setChart(new Chart(ctx,config))
            }
        }
      

    },[chartNums, chartLabels,chartData])

    return(
    <div id={props.id} className="smallBox">
    {Object.keys(chart).length !== ""?(
        <div>
        <canvas id="canvas">

        </canvas>
      </div>
    ):<h1>Loading...</h1>}
       
    </div>
    )
}
export default ChartCoin