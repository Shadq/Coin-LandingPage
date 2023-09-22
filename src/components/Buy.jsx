import React from "react";
import { dexes } from "../dexes";
import "../styles/Buy.css";

const Buy = () => {
  return (
    <div className="buy__container" id="buy">
      <div className="buy__text">
        <h1>Buy Stack Coin</h1>
        <span>
          We are available on the biggest decentralized exchange in the space
        </span>
      </div>
      <div className="dexes__container">
        {dexes.map((dex) => (
          <div className="dex">
            <a href={dex.link}>
              <img src={dex.icon} className="dex__img" />
            </a>
            <h2>{dex.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
