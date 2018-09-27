import React, { Component } from "react";

import HardwareList from "./hardwareList";
import HardwareDetail from "./hardwareDetail";
import Car from "./Car";

class Builder extends Component {
  constructor() {
    super();
    this.handleListClick = this.handleListClick.bind(this);
    this.handleAddToCar = this.handleAddToCar.bind(this);
    this.removeFromCar = this.removeFromCar.bind(this);

    this.state = {
      currentItem: null,
      car: [],
      totalNum: 0,
      total: 0,
      pcie: 0,
      sata: 0,
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0
    };
  }

  handleListClick(item) {
    this.setState({
      currentItem: item
    });
  }

  handleAddToCar(currentItem) {
    let totalNum = this.state.totalNum;
    let car = this.state.car;
    let total = this.state.total;
    let pcie = this.state.PCIE;
    let sata = this.state.SATA;
    let heat = this.state.heat;
    let overClockHeat = this.state.overClockHeat;
    let power = this.state.power;
    let overClockPower = this.state.overClockPower;

    let exist = false;

    if (car.length) {
      car.forEach(item => {
        if (item.id === currentItem.id) {
          item.number += 1;
          totalNum += 1;
          exist = true;
          this.setState({
            totalNum
          });
        }
      });
    }

    if (!exist) {
      car = car.concat(Object.assign({}, currentItem, { number: 1 }));
      totalNum += 1;
      this.setState({
        car,
        totalNum
      });
    }

    total = car
      .map(item => item.price * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      total
    });
    pcie = car
      .map(item => item.PCIE * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      pcie
    });
    sata = car
      .map(item => item.SATA * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      sata
    });
    heat = car
      .map(item => item.heat * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      heat
    });
    overClockHeat = car
      .map(item => item.overClockHeat * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      overClockHeat
    });
    power = car
      .map(item => item.power * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      power
    });
    overClockPower = car
      .map(item => item.overClockPower * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      overClockPower
    });
  }

  removeFromCar(currentItem) {
    let totalNum = this.state.totalNum;
    let car = this.state.car;
    let total = this.state.total;
    let pcie = this.state.PCIE;
    let sata = this.state.SATA;
    let heat = this.state.heat;
    let overClockHeat = this.state.overClockHeat;
    let power = this.state.power;
    let overClockPower = this.state.overClockPower;

    let exist = false;

    if (car.length) {
      car.forEach(item => {
        if (item.id === currentItem.id) {
          item.number -= 1;
          totalNum -= 1;
          exist = true;
          this.setState({
            totalNum
          });
        }
      });
    }

    if (!exist) {
      car = car.concat(Object.assign({}, currentItem, { number: 1 }));
      totalNum -= 1;
      this.setState({
        car,
        totalNum
      });
    }

    total = car
      .map(item => item.price * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      total
    });
    pcie = car
      .map(item => item.PCIE * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      pcie
    });
    sata = car
      .map(item => item.SATA * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      sata
    });
    heat = car
      .map(item => item.heat * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      heat
    });
    overClockHeat = car
      .map(item => item.overClockHeat * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      overClockHeat
    });
    power = car
      .map(item => item.power * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      power
    });
    overClockPower = car
      .map(item => item.overClockPower * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      overClockPower
    });
  }

  render() {
    return (
      <div className="row">
        <HardwareList
          mainboard={this.props.mainboard}
          cpu={this.props.cpu}
          listClick={this.handleListClick}
        />
        <HardwareDetail
          currentItem={this.state.currentItem}
          addToCar={this.handleAddToCar}
          removeFromCar={this.removeFromCar}
        />
        <Car {...this.state} />
      </div>
    );
  }
}

Builder.defaultProps = {
  mainboard: [
    {
      id: 1,
      title: "B350",
      company: "ANSUS",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 4,
      SATA: 6,
      size: "",
      heat: -40,
      overClockHeat: -50,
      power: -10,
      overClockPower: -20,
      price: 120,
      other: ""
    },
    {
      id: 2,
      title: "Z370",
      company: "ANSUS",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 4,
      SATA: 6,
      size: "-",
      heat: -40,
      overClockHeat: -50,
      power: -20,
      overClockPower: -30,
      price: 140,
      other: ""
    },
    {
      id: 3,
      title: "X470",
      company: "ANSUS",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 4,
      SATA: 8,
      size: "-",
      heat: -40,
      overClockHeat: -50,
      power: -30,
      overClockPower: -45,
      price: 175,
      other: ""
    }
  ],
  cpu: [
    {
      id: 4,
      title: "i7",
      company: "Intel",
      mainboardtype: "intel",
      cputype: "Intel",
      PCIE: 0,
      SATA: 0,
      size: "2.6Ghz",
      heat: -40,
      overClockHeat: -50,
      power: -100,
      overClockPower: -145,
      price: 200,
      other: ""
    },
    {
      id: 5,
      title: "R9",
      company: "AMD",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 0,
      SATA: 0,
      size: "2.6Ghz",
      heat: -40,
      overClockHeat: -50,
      power: -120,
      overClockPower: -165,
      price: 170,
      other: ""
    },
    {
      id: 6,
      title: "R7",
      company: "AMD",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 0,
      SATA: 0,
      size: "2.6Ghz",
      heat: -40,
      overClockHeat: -50,
      power: -150,
      overClockPower: -185,
      price: 130,
      other: ""
    }
  ]
};

export default Builder;
