import React from "react";

const HardwareList = ({
  mainboard,
  cpu,
  gpu,
  RAM,
  HHD,
  SSD,
  CASE,
  powerUnit,
  FAN,
  monitor,
  keyboard,
  mouse,
  listClick
}) => {
  return (
    <div className="hardwareListHolder">
      <div className="subtitlemain">
        <div className="subtitle1">Calculation Units</div>
        <div className="subtitle2">Data Transmission&Storage Units</div>
        <div className="subtitle3">Supporting Units</div>
        <div className="subtitle4">External Devices</div>
      </div>
      <div className="mainboardColumn itemColumn">
        <img className="sectionIcon" src={"/icon/mainboard.png"} />
        <p>Mainboard:</p>
        <div className="itemInColumn">
          {mainboard.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cpuColumn itemColumn">
        <img className="sectionIcon" src={"/icon/cpu.png"} />
        <p>CPU:</p>
        <div className="itemInColumn">
          {cpu.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="gpuColumn itemColumn">
        <img className="sectionIcon" src={"/icon/gpu.png"} />
        <p>GPU:</p>
        <div className="itemInColumn">
          {gpu.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ramColumn itemColumn">
        <img className="sectionIcon" src={"/icon/ram.png"} />
        <p>RAM:</p>
        <div className="itemInColumn">
          {RAM.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hhdColumn itemColumn">
        <img className="sectionIcon" src={"/icon/hhd.png"} />
        <p>HDD&HHD:</p>
        <div className="itemInColumn">
          {HHD.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ssdColumn itemColumn">
        <img className="sectionIcon" src={"/icon/ssd.png"} />
        <p>SSD:</p>
        <div className="itemInColumn">
          {SSD.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="caseColumn itemColumn">
        <img className="sectionIcon" src={"/icon/case.png"} />
        <p>Case:</p>
        <div className="itemInColumn">
          {CASE.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="powerunitColumn itemColumn">
        <img className="sectionIcon" src={"/icon/powerunit.png"} />
        <p>Powerunit:</p>
        <div className="itemInColumn">
          {powerUnit.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fanColumn itemColumn">
        <img className="sectionIcon" src={"/icon/fan.png"} />
        <p>FAN:</p>
        <div className="itemInColumn">
          {FAN.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="monitorColumn itemColumn">
        <img className="sectionIcon" src={"/icon/monitor.png"} />
        <p>Monitor:</p>
        <div className="itemInColumn">
          {monitor.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="keyboardColumn itemColumn">
        <img className="sectionIcon" src={"/icon/keyboard.png"} />
        <p>Keyboard:</p>
        <div className="itemInColumn">
          {keyboard.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mouseColumn itemColumn">
        <img className="sectionIcon" src={"/icon/mouse.png"} />
        <p>Mouse:</p>
        <div className="itemInColumn">
          {mouse.map(item => {
            return (
              <div className="part1">
                <div key={item.id} onClick={() => listClick(item)}>
                  <img className="sectionIcon" src={item.img} />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HardwareList;
