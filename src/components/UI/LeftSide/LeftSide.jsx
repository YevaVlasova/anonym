import "./LeftSide.scss";
import Instagram from "../../../components/icons/Instagram";
import Facebook from "../../../components/icons/Facebook";
import Linkedin from "../../../components/icons/Linkedin";

const LeftSide = () => {
    
    return (
        <div className="left-side">
            <div></div>
            <p className="left-side__time">
                <span>MON - FRI</span>
                <span>9AM - 7PM</span>
            </p>
            <div className="info-socials__links _left">
                <li className="left-side__li _left-li">
                    <a href="https://www.instagram.com/noname_digital/">
                        <Instagram />
                    </a>
                </li>
                <li className="left-side__li _left-li">
                    <a href="https://www.facebook.com/Noname-Digital-103906449126333">
                        <Facebook />
                    </a>
                </li>
                <li className="left-side__li _left-li">
                    <a href="https://www.linkedin.com/company/nonamed/">
                        <Linkedin />
                    </a>
                </li>
            </div>
        </div>
    );
}

export default LeftSide;