import badge from "../assets/icons/stripe-climate-badge.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="link">
        <Link to="/">home</Link>
        <Link to="/privacy">privacy</Link>
        <a href="pomofocus@gmail.com">contact</a>
        <Link to="/app">simple page</Link>
      </div>
      <div className="icons container">
        <a href="https://www.facebook.com/pomofocus">
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/pomofocus">
          <img src={twitter} alt="" />
        </a>
        <a href="https://climate.stripe.com/kfwPBZ">
          <img src={badge} alt="" />
        </a>
      </div>
      <div className="made">
        Made with &#3200;3 by <a href="#/">Yuya Uzu</a>
      </div>
      <div className="recerved">©Pomofocus 2021. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
