import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Supplierregistration from "./sregistration";
import Supplierlogin from "./slogin";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <HashRouter>
      <div className="welcomeContainer">
        <header>
          <nav>
            <div className="headerLinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/career">Career</Link>
              <Link to="/supplierlogin">Supplier</Link>
              <Link to="/login">User</Link>
            </div>
          </nav>
        </header>
        <section className="welcomeBodyWrapper">
          <div className="centerHolder">
            <div className="greetings">
              <img
                className="welcomeImg"
                width="100%"
                src={"/homepagelogo.png"}
              />
              <h1>Welcome to easyPC</h1>
              <h1>Build your own PCsystem!</h1>
              <div className="homepageCanvas" />
            </div>
            <div className="formHolder">
              <div>
                {/* REGISTRATION */}
                <Route exact path="/" component={Registration} />
                {/* LOGIN / SIGNUP*/}
                <Route path="/login" component={Login} />
                {/*Supplier LOGIN / SIGNUP*/}
                <Route path="/supplierlogin" component={Supplierlogin} />
                {/*Supplier Registration*/}
                <Route
                  path="/supplierregistration"
                  component={Supplierregistration}
                />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footerCenterHolder">
            <p>
              © 2018 easyPC Studio | All Rights Reserved | +49 176 8083 7305 |
              liuxiao5248@gmail.com | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            {"    "}
            <Link to="/contact" style={{ color: "white" }}>
              Contact us!
            </Link>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}
