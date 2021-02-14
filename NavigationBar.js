//import './StyllingCssfiles/NavigationBar.css';
import "./nav.css";
import Registration from "../Registration";
import Login from "../Login";
import About from "../Aboutus";
import Home from "../Home";
import TimeTable from "../TimeTable";
//import Contact from '../ContactUs';
import Contact from "../Contact";
import React, { Component } from "react";
import ReactDOM from "react-dom";
//react routing setup
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Router,
} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Cookies from "js-cookie";
import Dashboard from "../Dashbord/Dashboard.js";

class NavigationBar extends Component {
  state = {
    loginstatusimg: "./loged.jpg",
  };

  openRegFun = () => {
    return <Registration />;
  };

  openLogFun = () => {
    return <Login />;
  };

  opentimeFun = () => {
    return <TimeTable />;
  };

  //when click the underline onMouseEnter={ } onMouseLeave={ }
  hover = (e) => {
    e.target.style.borderBottom = "2px white solid ";
  };
  hoverout = (e) => {
    e.target.style.borderBottom = "0px white solid ";
  };

  clk = () => {
    return (
      <div>
        <Login />
      </div>
    );
  };

  // if cookies have a login values true change the Login status
  readcookies = () => {
    //get data inside the cookies
    var x = Cookies.get("usernamecookie");
    var y = Cookies.get("passwordcookie");

    if (x.length !== 0 && y.length !== 0) {
    } else {
    }
  };

  render() {
    return (
      <div className="NavigationBar">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-2 top-fixed">
            <a className="navbar-brand c" href="#1">
              My academy{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto float-right ">
                <li className="nav-item active hover">
                  <Link className="nav-link" to="/home">
                    Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#7"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Couses/Modules
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/log">
                      OL
                    </a>
                    <a className="dropdown-item" href="#9">
                      AL
                    </a>
                    <a className="dropdown-item" href="#10">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#11">
                      Separated link
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-warning"
                    data-toggle="dropdown"
                    href="#7"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Our Services
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#8">
                      Traning programs
                    </a>
                    <a className="dropdown-item" href="#9">
                      Learning Programs
                    </a>
                    <a className="dropdown-item" href="#10">
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#11">
                      Separated link
                    </a>
                  </div>
                </li>

                <li className="nav-item hover">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item hover">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " to="/TimeTabe">
                    <span
                      className="border-3 border p-2 "
                      onclick={this.opentimeFun}
                    >
                      Time Table
                    </span>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link " to="/log">
                    <span
                      className="border-3 border p-2 "
                      onclick={this.openRegFun}
                    >
                      Login
                    </span>
                  </Link>
                </li>

                <li className="nav-item  ">
                  <Link to="/reg" className="nav-link ">
                    <span className="border-3 border p-2">Register</span>
                  </Link>
                  {/*
             <a className="nav-link " href="/reg"><span className="border-3 border p-2"  >Register</span></a>
           */}
                </li>

                {/**
       * 
       *  <li className="nav-item ">
        <Link className="nav-link " to="/Dashboard"  ><span className="border-3 border p-2 "  >Dashboard</span></Link>
       </li>
       */}
              </ul>

              <div>
                <div
                  className="rounded-circle text-center bg-light"
                  style={{
                    color: "red",
                    border: "1px white solid",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  {}
                  <AccountCircleIcon
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/reg">
              <Registration />
            </Route>
            <Route exact path="/log" component={Login} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/home" component={Home} />
            <Route exact="/TimeTable" component={TimeTable} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        {/**
 * 
 * <BrowserRouter>
      
</BrowserRouter>
 * 
 */}
      </div>
    );
  }
}

export default NavigationBar;
