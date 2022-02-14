import logo from "../assets/icons/icon-white.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import setting from "../assets/icons/config-white.png";
import report from "../assets/icons/graph-white.png";
import user from "../assets/icons/user-white.png";
import Chart from "./Chart";

function Navbar() {
  const [sh, setSh] = useState("");

  return (
    <div className="navbar container">
      <h3 className="logo">
        <Link to="/app">
          <img src={logo} alt="logo" />
          Pomofocus
        </Link>
      </h3>
      <div className="buttons">
        <span id="report" onClick={() => setSh("sh")}>
          <img src={report} alt="Report" />
          <div id="p">Report</div>
        </span>
        <span id="report">
          <img src={setting} alt="Setting" />
          <div id="p">Setting</div>
        </span>
        <span id="report">
          <img src={user} alt="Login" />
          <div id="p">Login</div>
        </span>
      </div>

      <div className={`report_list ${sh}`}>
        <div className="report_add">
          <div className="exit" onClick={() => setSh("")}>
            <img src="https://pomofocus.io/icons/remove-black-sm.png" alt="" />
          </div>
          <div className="buttons">
            <div id="btn">Summary</div>
            <div id="btn">Deteils</div>
            <div id="btn">Ranking</div>
          </div>
          <h3>Activity Summary</h3>
          <p>* This report will be available when you are logged in</p>
          <h3>Focus Hours</h3>
          <p>* This report will be available when you are logged in</p>
          <div className="canvas">
            <Chart />
          </div>
          <div className="total">
            <h4>Total</h4>
            <h4>00:00</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
