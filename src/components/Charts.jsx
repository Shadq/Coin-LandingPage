import React from "react";
import { Line } from "react-chartjs-2";
import { BsCoin } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import truncateEthAddress from "truncate-eth-address";
import Chart from "chart.js/auto";
import "../styles/Charts.css";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#3773f5",
      borderColor: "#4dce29",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#4dce29",
      pointBackgroundColor: "#4dce29",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#4dce29",
      pointHoverBorderColor: "#4dce29",
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 30, 70, 86, 64, 58, 69, 100, 50, 54],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Charts = () => {
  return (
    <div className="chart__container" id="charts">
      <h1>Stack Coin Price Chart (Since Deployment)</h1>
      <div className="chart">
        <Line data={data} options={options} width={400} height={150} />
      </div>
      <div className="price__info">
        <div className="stack__container">
          <BsCoin className="stack__coin" />
          <h2>Stack Coin Price:</h2>
          <span>The up to date price of the Stack Coin in USD:</span>
          <span className="stack__price">54.67$</span>
        </div>
        <div className="stack__container">
          <AiOutlineStock className="stack__coin" />
          <h2>Stack Coin Prediction:</h2>
          <span>
            The prediction of the Stack coin price made by our team for next
            year
          </span>
          <span className="stack__price">105$</span>
        </div>
        <div className="stack__container">
          <FaWallet className="stack__coin" />
          <h2>Stack Coin Address</h2>
          <span>
            The Stack Coin Address which is deployed on the ethereum mainnet
          </span>
          <span className="stack__price">
            <a href="https://etherscan.io/">
              {truncateEthAddress("0x0000000000000000000000000000000000000000")}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Charts;
