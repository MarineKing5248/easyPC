import React from "react";

const HardwareList = ({ mainboard, cpu, listClick }) => {
  return (
    <div className="hardwareListHolder">
      <h2>Mainboard:</h2>
      <ul>
        {mainboard.map(item => {
          return (
            <div>
              <div>
                <li key={item.id} onClick={() => listClick(item)}>
                  {item.title}
                </li>
              </div>
            </div>
          );
        })}
      </ul>
      <h2>CPU:</h2>
      <ul>
        {cpu.map(item => {
          return (
            <div>
              <div>
                <li key={item.id} onClick={() => listClick(item)}>
                  {item.title}
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HardwareList;
