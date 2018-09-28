import React from "react";

const HardwareDetail = ({ currentItem, addToCar, removeFromCar }) => {
  if (!currentItem)
    return (
      <div className="itemDetails">
        <h3 className="itemDetailsInfo">
          Click on one item to see details here.
        </h3>
      </div>
    );

  return (
    <div className="itemDetails">
      <img className="itemImage" src={currentItem.img} />
      <div className="detailcolumn1">
        <h3 className="detailsTitle">{currentItem.title}</h3>
        <p className="detailsCompany">
          Company:&nbsp;&nbsp;{currentItem.company}
        </p>
        <p>Type:&nbsp;&nbsp;{currentItem.size}</p>
        <p>MotherBoard Type:&nbsp;&nbsp;{currentItem.mainboardtype}</p>
        <p>CPU Type:&nbsp;&nbsp;{currentItem.cputype}</p>
        <p>PCIE num:&nbsp;&nbsp;{currentItem.PCIE}</p>
        <p>SATA num:&nbsp;&nbsp;{currentItem.SATA}</p>
      </div>
      <div className="detailcolumn2">
        <p>
          Power Consume:&nbsp;&nbsp;{currentItem.power}
          {""} W
        </p>
        <p>
          OverClockPower:&nbsp;&nbsp;{currentItem.overClockPower}
          {""} W
        </p>
        <p>
          Heat:&nbsp;&nbsp;{currentItem.heat}
          {""} W
        </p>
        <p>
          OverClockHeat:&nbsp;&nbsp;{currentItem.overClockHeat}
          {""} W
        </p>
        <p>Price:&nbsp;&nbsp;{currentItem.price}</p>
        <p>Others:&nbsp;&nbsp;{currentItem.other}</p>
        <button
          className="dangerousButton"
          onClick={() => addToCar(currentItem)}
        >
          Add to Plan
        </button>
        &nbsp;&nbsp;
        <button
          className="dangerousButton"
          onClick={() => removeFromCar(currentItem)}
        >
          Delete from Plan
        </button>
      </div>
    </div>
  );
};

export default HardwareDetail;
