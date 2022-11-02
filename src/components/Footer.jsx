import Zuri from "../assets/zuri-logo.png";
import I4G from '../assets/I4G.png'
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="zuri-logo">
        <img src={Zuri} alt="Zuri Logo" />
      </div>

      <p>HNG Internship 9 Frontend Task</p>

        <div className="i4g-logo">
            <img src={I4G} alt="Ingressive for good logo" />
        </div>
    </footer>
  );
};

export default Footer;
