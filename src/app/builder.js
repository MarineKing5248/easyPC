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
      overClockPower: 0,
      rating: 0
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
    let rating = this.state.rating;

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
    rating = car
      .map(item => item.rating * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      rating
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
    rating = car
      .map(item => item.rating * item.number)
      .reduce((prev, cur) => prev + cur);
    this.setState({
      rating
    });
  }

  render() {
    return (
      <div className="mainBuilder">
        <Car {...this.state} />
        <HardwareList
          mainboard={this.props.mainboard}
          cpu={this.props.cpu}
          gpu={this.props.gpu}
          RAM={this.props.RAM}
          HHD={this.props.HHD}
          SSD={this.props.SSD}
          CASE={this.props.CASE}
          powerUnit={this.props.powerUnit}
          FAN={this.props.FAN}
          monitor={this.props.monitor}
          keyboard={this.props.keyboard}
          mouse={this.props.mouse}
          listClick={this.handleListClick}
        />
        <HardwareDetail
          currentItem={this.state.currentItem}
          addToCar={this.handleAddToCar}
          removeFromCar={this.removeFromCar}
        />
      </div>
    );
  }
}

Builder.defaultProps = {
  mainboard: [
    {
      id: 101,
      title: "Prime B350",
      company: "ANSUS",
      mainboardtype: "ATX",
      cputype: "APU",
      PCIE: 4,
      SATA: 6,
      size: "",
      heat: -40,
      overClockHeat: -50,
      power: -10,
      overClockPower: -20,
      price: 77,
      other: "M.2, USB 3.1",
      rating: 558.3,
      img: "/itemImage/B350.png"
    },
    {
      id: 102,
      title: "Prime Z370",
      company: "ANSUS",
      mainboardtype: "ATX",
      cputype: "APU",
      PCIE: 4,
      SATA: 6,
      size: "DDR4",
      heat: -20,
      overClockHeat: -30,
      power: -20,
      overClockPower: -30,
      price: 140,
      other: "M.2, USB 3.1",
      rating: 840,
      img: "/itemImage/motherboard2.png"
    },
    {
      id: 103,
      title: "X470",
      company: "GIGABYTE",
      mainboardtype: "ATX",
      cputype: "APU",
      PCIE: 4,
      SATA: 8,
      size: "DDR4",
      heat: -20,
      overClockHeat: -30,
      power: -30,
      overClockPower: -45,
      price: 175,
      other: "M.2, USB 3.1",
      rating: 1575,
      img: "/itemImage/motherboard3.png"
    },
    {
      id: 104,
      title: "ROG Strix X470",
      company: "ANSUS",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 4,
      SATA: 8,
      size: "DDR4",
      heat: -40,
      overClockHeat: -50,
      power: -50,
      overClockPower: -66,
      price: 199,
      other: "wifi-bluetooth built-in",
      rating: 1791,
      img: "/itemImage/motherboard4.png"
    },
    {
      id: 105,
      title: "MSI B450",
      company: "MSI",
      mainboardtype: "ATX",
      cputype: "Intel",
      PCIE: 4,
      SATA: 8,
      size: "DDR3",
      heat: -33,
      overClockHeat: -50,
      power: -37,
      overClockPower: -66,
      price: 92,
      other: "built-in wifi-bluetooth module",
      rating: 644,
      img: "/itemImage/motherboard2.png"
    },
    {
      id: 105,
      title: "MSI H270i",
      company: "MSI",
      mainboardtype: "ITX",
      cputype: "Intel&APU",
      PCIE: 2,
      SATA: 4,
      size: "DDR3",
      heat: -20,
      overClockHeat: -30,
      power: -30,
      overClockPower: -40,
      price: 60,
      other: "built-in wifi-bluetooth module",
      rating: 360,
      img: "/itemImage/itx1.png"
    }
  ],
  cpu: [
    {
      id: 201,
      title: "ryzen5 2400G",
      company: "AMD",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 0,
      SATA: 0,
      size: "4x 3.60GHz",
      heat: -90,
      overClockHeat: -120,
      power: -100,
      overClockPower: -145,
      price: 136,
      other: "",
      rating: 816,
      img: "/itemImage/ryzen5.png"
    },
    {
      id: 202,
      title: "ryzen7 2700X",
      company: "AMD",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 0,
      SATA: 0,
      size: "8x 4.2Ghz",
      heat: -70,
      overClockHeat: -80,
      power: -180,
      overClockPower: -235,
      price: 300,
      other: "BoxFan included",
      rating: 2700,
      img: "/itemImage/ryzen7.png"
    },
    {
      id: 203,
      title: "Intel Core i7 8086K",
      company: "Intel",
      mainboardtype: "ATX",
      cputype: "Intel",
      PCIE: 0,
      SATA: 0,
      size: "4x 4.0Ghz",
      heat: -100,
      overClockHeat: -130,
      power: -150,
      overClockPower: -185,
      price: 479,
      other: "",
      rating: 2395,
      img: "/itemImage/i78086k.png"
    },
    {
      id: 204,
      title: "Intel Core i7 7700",
      company: "Intel",
      mainboardtype: "ATX",
      cputype: "Intel",
      PCIE: 0,
      SATA: 0,
      size: "4x 3.6Ghz",
      heat: -85,
      overClockHeat: -110,
      power: -120,
      overClockPower: -165,
      price: 349,
      other: "",
      rating: 2792,
      img: "/itemImage/i78086k.png"
    },
    {
      id: 205,
      title: "Intel Core i3 7100",
      company: "Intel",
      mainboardtype: "ATX",
      cputype: "Intel",
      PCIE: 0,
      SATA: 0,
      size: "2x 3.9Ghz",
      heat: -55,
      overClockHeat: -70,
      power: -120,
      overClockPower: -145,
      price: 160,
      other: "",
      rating: 1248,
      img: "/itemImage/i78086k.png"
    }
  ],
  gpu: [
    {
      id: 301,
      title: "GeForce GTX 1060",
      company: "MSI",
      mainboardtype: "-",
      cputype: "-",
      PCIE: -1,
      SATA: 0,
      size: "6GB",
      heat: -200,
      overClockHeat: -250,
      power: -234,
      overClockPower: -290,
      price: 316,
      other: "Nvidia GPU",
      rating: 2600,
      img: "/itemImage/gtx1060msi.png"
    },
    {
      id: 302,
      title: "GeForce GTX 1060",
      company: "Asus",
      mainboardtype: "-",
      cputype: "-",
      PCIE: -1,
      SATA: 0,
      size: "6GB",
      heat: -210,
      overClockHeat: -250,
      power: -220,
      overClockPower: -270,
      price: 269,
      other: "Nvidia GPU",
      rating: 2152,
      img: "/itemImage/gtx1060asus.png"
    },
    {
      id: 303,
      title: "Radeon RX570",
      company: "Asus",
      mainboardtype: "-",
      cputype: "-",
      PCIE: -1,
      SATA: 0,
      size: "6GB",
      heat: -190,
      overClockHeat: -220,
      power: -180,
      overClockPower: -220,
      price: 189,
      other: "AMD GPU",
      rating: 1700,
      img: "/itemImage/rx570.png"
    },
    {
      id: 304,
      title: "GeForce RTX2080",
      company: "Asus",
      mainboardtype: "-",
      cputype: "-",
      PCIE: -1,
      SATA: 0,
      size: "8GB",
      heat: -270,
      overClockHeat: -350,
      power: -260,
      overClockPower: -320,
      price: 849,
      other: "Nvidia GPU",
      rating: 7301,
      img: "/itemImage/rtx2080.png"
    },
    {
      id: 305,
      title: "GeForce GTX1050",
      company: "MSI",
      mainboardtype: "-",
      cputype: "-",
      PCIE: -1,
      SATA: 0,
      size: "2GB",
      heat: -120,
      overClockHeat: -145,
      power: -200,
      overClockPower: -245,
      price: 142,
      other: "Nvidia GPU",
      rating: 1164.4,
      img: "/itemImage/gtx1050.png"
    }
  ],
  RAM: [
    {
      id: 401,
      title: "Vengeance LPX",
      company: "Corsair",
      mainboardtype: "DDR4 Support",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "16GB",
      heat: -10,
      overClockHeat: -20,
      power: -10,
      overClockPower: -15,
      price: 139,
      other: "max 3000MHz",
      rating: 1251,
      img: "/itemImage/vegence1.png"
    },
    {
      id: 402,
      title: "Aegis",
      company: "G.Skill",
      mainboardtype: "DDR4 Support",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "8GB",
      heat: -10,
      overClockHeat: -20,
      power: -10,
      overClockPower: -15,
      price: 62.5,
      other: "max 3000MHz",
      rating: 500,
      img: "/itemImage/Aegis.png"
    },
    {
      id: 403,
      title: "Trident Z RGB",
      company: "G.Skill",
      mainboardtype: "DDR4 Support",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "16GB",
      heat: -11,
      overClockHeat: -21,
      power: -13,
      overClockPower: -18,
      price: 130,
      other: "max 3200MHz",
      rating: 1053,
      img: "/itemImage/TridentZ.png"
    },
    {
      id: 404,
      title: "Ballistix Sport LT",
      company: "Crucial",
      mainboardtype: "DDR4 Support",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "8GB",
      heat: -9,
      overClockHeat: -16,
      power: -8,
      overClockPower: -14,
      price: 75.9,
      other: "max 2400MHz",
      rating: 590,
      img: "/itemImage/ballistix.png"
    },
    {
      id: 405,
      title: "Viper 4 rot",
      company: "Patriot",
      mainboardtype: "DDR4 Support",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "8GB",
      heat: -10,
      overClockHeat: -16,
      power: -9,
      overClockPower: -15,
      price: 75,
      other: "max 2400MHz",
      rating: 600,
      img: "/itemImage/viper.png"
    },
    {
      id: 406,
      title: "ValueSelect",
      company: "Corsair",
      mainboardtype: "DDR4 Support",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "8GB",
      heat: -7,
      overClockHeat: -11,
      power: -8,
      overClockPower: -12,
      price: 61.9,
      other: "max 2133MHz",
      rating: 557,
      img: "/itemImage/ValueSelect.png"
    }
  ],
  HHD: [
    {
      id: 501,
      title: "WD RED 8TB",
      company: "Western Digital",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "8TB 3.5inch",
      heat: -20,
      overClockHeat: -20,
      power: -40,
      overClockPower: -40,
      price: 112.9,
      other: "",
      rating: 971,
      img: "/itemImage/WDred8.png"
    },
    {
      id: 502,
      title: "WD Blue 2TB",
      company: "Western Digital",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "8TB 3.5inch",
      heat: -10,
      overClockHeat: -10,
      power: -35,
      overClockPower: -35,
      price: 58.37,
      other: "",
      rating: 514,
      img: "/itemImage/WDblue2.png"
    },
    {
      id: 503,
      title: "Seagate BarraCuda 2TB",
      company: "Seagate",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "2TB 3.5inch",
      heat: -10,
      overClockHeat: -10,
      power: -35,
      overClockPower: -36,
      price: 58.38,
      other: "",
      rating: 513,
      img: "/itemImage/sgBarraCuda2.png"
    },
    {
      id: 504,
      title: "WD Blue 1TB",
      company: "Western Digital",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "1TB 3.5inch",
      heat: -10,
      overClockHeat: -10,
      power: -35,
      overClockPower: -36,
      price: 39.85,
      other: "",
      rating: 358,
      img: "/itemImage/WDblue1.png"
    }
  ],
  SSD: [
    {
      id: 601,
      title: "250GB Samsung 860Evo",
      company: "Samsung",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "250GB 2.5inch",
      heat: -5,
      overClockHeat: -6,
      power: -10,
      overClockPower: -14,
      price: 59.23,
      other: "SATA connection",
      rating: 486,
      img: "/itemImage/samsungssd.png"
    },
    {
      id: 602,
      title: "500GB Samsung 860Evo",
      company: "Samsung",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "500GB 2.5inch",
      heat: -5,
      overClockHeat: -6,
      power: -10,
      overClockPower: -14,
      price: 86.9,
      other: "SATA connection",
      rating: 738,
      img: "/itemImage/samsungssd.png"
    },
    {
      id: 603,
      title: "60GB Patriot Flare",
      company: "Patriot",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "60GB 2.5inch",
      heat: -6,
      overClockHeat: -7,
      power: -11,
      overClockPower: -13,
      price: 17.9,
      other: "SATA connection",
      rating: 161,
      img: "/itemImage/60GB _Patriot_Flare.png"
    },
    {
      id: 604,
      title: "Kingston A400",
      company: "Kingston",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: -1,
      size: "120GB 2.5inch",
      heat: -6,
      overClockHeat: -7,
      power: -11,
      overClockPower: -13,
      price: 22.97,
      other: "SATA connection",
      rating: 202,
      img: "/itemImage/KingstonA400.png"
    },
    {
      id: 605,
      title: "1TB Samsung 970Evo",
      company: "Samsung",
      mainboardtype: "-",
      cputype: "-",
      PCIE: -1,
      SATA: 0,
      size: "1TB",
      heat: -6,
      overClockHeat: -7,
      power: -11,
      overClockPower: -13,
      price: 286.74,
      other: "M.2 2280 PCIe 3.0 x4",
      rating: 2523,
      img: "/itemImage/Samsung970Evo.png"
    },
    {
      id: 606,
      title: "512GB Samsung 970Pro",
      company: "Samsung",
      mainboardtype: "-",
      cputype: "-",
      PCIE: -1,
      SATA: 0,
      size: "512GB",
      heat: -6,
      overClockHeat: -7,
      power: -11,
      overClockPower: -13,
      price: 192.79,
      other: "M.2 2280 PCIe 3.0 x4",
      rating: 1600,
      img: "/itemImage/Samsung970Evo.png"
    }
  ],
  CASE: [
    {
      id: 701,
      title: "Corsair Crystal 570X RGB",
      company: "Corsair",
      mainboardtype: "ATX mATX",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "full tower",
      heat: 40,
      overClockHeat: 45,
      power: 0,
      overClockPower: 0,
      price: 156,
      other: "max 10FAN,supporting Liquid Cooling",
      rating: 1482,
      img: "/itemImage/570XRGB.png"
    },
    {
      id: 702,
      title: "Corsair Carbide 275R",
      company: "Corsair",
      mainboardtype: "ATX mATX ITX",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "midi tower",
      heat: 30,
      overClockHeat: 35,
      power: 0,
      overClockPower: 0,
      price: 61.39,
      other: "max 6FAN,supporting Liquid Cooling",
      rating: 540,
      img: "/itemImage/Carbide275R.png"
    },
    {
      id: 703,
      title: "Sharkoon VS4-S",
      company: "Sharkoon",
      mainboardtype: "ATX mATX ITX",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "midi tower",
      heat: 30,
      overClockHeat: 35,
      power: 0,
      overClockPower: 0,
      price: 26.52,
      other: "max 6FAN",
      rating: 14,
      img: "/itemImage/SharkoonVS4-S.png"
    },
    {
      id: 704,
      title: "Corsair Carbide Spec-04",
      company: "Corsair",
      mainboardtype: "ATX mATX ITX",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "midi tower",
      heat: 30,
      overClockHeat: 35,
      power: 0,
      overClockPower: 0,
      price: 61.39,
      other: "max 8FAN,supporting Liquid Cooling",
      rating: 540,
      img: "/itemImage/CorsairCarbideSpec-04.png"
    },
    {
      id: 705,
      title: "Corsair Carbide 275R",
      company: "Corsair",
      mainboardtype: "ATX mATX ITX",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "midi tower",
      heat: 30,
      overClockHeat: 35,
      power: 0,
      overClockPower: 0,
      price: 56.85,
      other: "max 6FAN",
      rating: 511,
      img: "/itemImage/Carbide275R.png"
    }
  ],
  powerUnit: [
    {
      id: 801,
      title: "450 Watt SF450",
      company: "corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "450W",
      heat: -20,
      overClockHeat: -25,
      power: 450,
      overClockPower: 450,
      price: 78.07,
      other: "Modular 80+ gold",
      rating: 702,
      img: "/itemImage/450wcorsair.png"
    },
    {
      id: 803,
      title: "500W Pure Power",
      company: "be quiet!",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "500W",
      heat: -20,
      overClockHeat: -30,
      power: 500,
      overClockPower: 500,
      price: 66.09,
      other: "Modular 80+ Silver",
      rating: 528,
      img: "/itemImage/Pure_Power_10_CM.png"
    },
    {
      id: 802,
      title: " be quiet! 550 Watt",
      company: "be quiet!",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "550W",
      heat: -25,
      overClockHeat: -35,
      power: 550,
      overClockPower: 550,
      price: 91.15,
      other: "Modular 80+ gold",
      rating: 756.54,
      img: "/itemImage/550w.png"
    },
    {
      id: 804,
      title: "650W Corsair RM650X",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "650W",
      heat: -35,
      overClockHeat: -45,
      power: 650,
      overClockPower: 650,
      price: 97.63,
      other: "Modular 80+ gold",
      rating: 781,
      img: "/itemImage/RM650X.png"
    },
    {
      id: 805,
      title: "750W Corsair RM750X",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "750",
      heat: -40,
      overClockHeat: -45,
      power: 750,
      overClockPower: 750,
      price: 102.83,
      other: "",
      rating: 822,
      img: "/itemImage/RM750X.png"
    },
    {
      id: 806,
      title: "850W Corsair TXM",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "850",
      heat: -45,
      overClockHeat: -50,
      power: 850,
      overClockPower: 850,
      price: 108.83,
      other: "",
      rating: 821,
      img: "/itemImage/TX-M850.png"
    }
  ],
  FAN: [
    {
      id: 901,
      title: "Corsair ML140",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "140mm air",
      heat: 65,
      overClockHeat: 75,
      power: -20,
      overClockPower: -25,
      price: 35,
      other: "",
      rating: 280,
      img: "/itemImage/corsairfan01.png"
    },
    {
      id: 902,
      title: "Corsair ML120",
      company: "AMD",
      mainboardtype: "ATX",
      cputype: "AMD",
      PCIE: 0,
      SATA: 0,
      size: "120mm air",
      heat: 55,
      overClockHeat: 70,
      power: -18,
      overClockPower: -22,
      price: 28,
      other: "",
      rating: 224,
      img: "/itemImage/corsairfan1.png"
    },
    {
      id: 903,
      title: "SilenX 80mm",
      company: "SilenX",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "80mm air",
      heat: 37,
      overClockHeat: 50,
      power: -5,
      overClockPower: -8,
      price: 7,
      other: "",
      rating: 49,
      img: "/itemImage/SilenXEffizioQuiet80.png"
    },
    {
      id: 904,
      title: "BlackSilent 80mm",
      company: "-",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "60mm air",
      heat: 35,
      overClockHeat: 44,
      power: -3,
      overClockPower: -6,
      price: 5.2,
      other: "",
      rating: 30,
      img: "/itemImage/Noiseblocker60.png"
    },
    {
      id: 905,
      title: "Corsair Hydro H115i",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "280mm water",
      heat: 370,
      overClockHeat: 400,
      power: -60,
      overClockPower: -100,
      price: 128.22,
      other: "CPU cooler",
      rating: 1115,
      img: "/itemImage/Corsair_Hydro_H115i.png"
    },
    {
      id: 906,
      title: "MasterLiquid ML120R",
      company: "CoolerMaster",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "120mm water",
      heat: 180,
      overClockHeat: 240,
      power: -30,
      overClockPower: -60,
      price: 101.45,
      other: "none CPU cooler",
      rating: 888,
      img: "/itemImage/MasterLiquid_ML120R.png"
    }
  ],
  monitor: [
    {
      id: 1001,
      title: "Curved VZ27VQ",
      company: "Asus",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "27inch",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 178.85,
      other: "",
      rating: 1073,
      img: "/itemImage/monitor1.png"
    },
    {
      id: 1002,
      title: "Asus VP278H ",
      company: "Asus",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "27inch",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 158,
      other: "",
      rating: 916,
      img: "/itemImage/monitor2.png"
    },
    {
      id: 1003,
      title: "MSI Optix G24C ",
      company: "MSI",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "23.6inch",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 199,
      other: "",
      rating: 1393,
      img: "/itemImage/monitor3.png"
    },
    {
      id: 1004,
      title: "ThinkVision T24H-10",
      company: "Lenova",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "27inch",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 130,
      other: "",
      rating: 5,
      img: "/itemImage/monitor4.png"
    }
  ],
  keyboard: [
    {
      id: 1101,
      title: "Corsair K70 RGB",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "Mechanical Gaming Keyboard",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 170,
      other: "",
      rating: 1654,
      img: "/itemImage/k70corsair.png"
    },
    {
      id: 1102,
      title: "Corsair K55 RGB",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "Mechanical Gaming Keyboard",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 50,
      other: "",
      rating: 475,
      img: "/itemImage/k55corsair.png"
    },
    {
      id: 1103,
      title: "BLACKWIDOW CHROMA V2",
      company: "Razer",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "Mechanical Gaming Keyboard",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 150,
      other: "",
      rating: 1245,
      img: "/itemImage/razer.png"
    }
  ],
  mouse: [
    {
      id: 1201,
      title: "Logitech M510",
      company: "Logitech",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "wireless",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 15,
      other: "",
      rating: 105,
      img: "/itemImage/logitechM510.png"
    },
    {
      id: 1202,
      title: "Logitech M570",
      company: "Logitech",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "wireless",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 45,
      other: "",
      rating: 313,
      img: "/itemImage/logitechM570.png"
    },
    {
      id: 1203,
      title: "CORSAIR Harpoon",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "wire",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 28,
      other: "",
      rating: 252,
      img: "/itemImage/CORSAIR_Harpoon.png"
    },
    {
      id: 1204,
      title: "CORSAIR M65",
      company: "Corsair",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "wire",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 50,
      other: "",
      rating: 470,
      img: "/itemImage/CORSAIRM65.png"
    },
    {
      id: 1205,
      title: "RAZER MAMBA",
      company: "Razer",
      mainboardtype: "-",
      cputype: "-",
      PCIE: 0,
      SATA: 0,
      size: "wire",
      heat: 0,
      overClockHeat: 0,
      power: 0,
      overClockPower: 0,
      price: 70,
      other: "",
      rating: 550,
      img: "/itemImage/RAZER_MAMBA.png"
    }
  ]
};

export default Builder;
