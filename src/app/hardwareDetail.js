import React from "react";

const HardwareDetail = ({ currentItem, addToCar, removeFromCar }) => {
  if (!currentItem)
    return (
      <div className="col-md-4">
        <h2>Selected Item:</h2>
      </div>
    );
  return (
    <div>
      <div className="col-md-4">
        <h2>Item Details:</h2>
        <h3>{currentItem.title}</h3>
        <p>Company:{currentItem.company}</p>
        <p>Type:{currentItem.size}</p>
        <p>Type:{currentItem.mainboardtype}</p>
        <p>CPU Type:{currentItem.cputype}</p>
        <p>PCIE num:{currentItem.PCIE}</p>
        <p>SATA num:{currentItem.SATA}</p>
        <p>
          Power Consume:{currentItem.power}
          {""} W
        </p>
        <p>
          OverClockPower:{currentItem.overClockPower}
          {""} W
        </p>
        <p>
          Heat:{currentItem.heat}
          {""} W
        </p>
        <p>
          OverClockHeat:{currentItem.OverClockHeat}
          {""} W
        </p>
        <p>Price:{currentItem.price}</p>
        <p>Other:{currentItem.other}</p>
        <button onClick={() => addToCar(currentItem)}>Add to your Plan</button>
        <button onClick={() => removeFromCar(currentItem)}>
          Delete from your Plan
        </button>
      </div>
    </div>
  );
};

export default HardwareDetail;
