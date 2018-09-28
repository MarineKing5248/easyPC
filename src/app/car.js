import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Car = ({
  car,
  totalNum,
  total,
  pcie,
  sata,
  heat,
  overClockHeat,
  power,
  overClockPower,
  rating
}) => {
  let rate = rating / total;
  rate = rate.toFixed(2);
  let result = car.length ? (
    <div className="indicator2">
      <div className="grid1 gridcommon">
        <p>PCIE number:</p>
        {pcie}
      </div>
      <div className="grid2 gridcommon">
        <p>SATA number:</p>
        {sata}
      </div>
      <div className="grid3 gridcommon">
        <p>Power:</p>
        {power}&nbsp;W
      </div>
      <div className="grid4 gridcommon">
        <p>OverClockingPower:</p>
        {overClockPower}&nbsp;W
      </div>
      <div className="grid5 gridcommon">
        <p>Heat:</p>
        {heat}&nbsp;W
      </div>
      <div className="grid6 gridcommon">
        <p>overClockingHeat:</p>
        {overClockHeat}&nbsp;W
      </div>
      <div className="grid7 gridcommon">
        <p>Rating:</p>
        {rate}&nbsp;/10
      </div>
      <div className="grid8 gridcommon">
        <p>Price:</p>
        {total}&nbsp;€
      </div>
    </div>
  ) : (
    <h3 className="itemDetailsInfo">You havn't started your plan!</h3>
  );
  function refreshPage() {
    window.parent.location = window.parent.location.href;
  }
  return (
    <div className="indicator-holder">
      <div className="indicator">
        <p>
          Indicator:&nbsp; &nbsp;<button className="dangerousButton">
            Save List
          </button>&nbsp;&nbsp;{" "}
          <button
            type="button"
            onClick={refreshPage}
            className="dangerousButton"
          >
            Clear
          </button>
        </p>
      </div>
      {result}
      <div className="historyItem">
        {car.map((item, index) => {
          return (
            <div key={index}>
              <p>Item:&nbsp;{item.title}</p>
              <p>sum:&nbsp;{item.price}&nbsp;€</p>
              <p>item amount:&nbsp;{item.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Car;
