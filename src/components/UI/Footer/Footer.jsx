import { Link } from "react-router-dom";
import logo from '../../../assets/Logo.svg';
import LogoBgStable from '../../icons/LogoBgStable';
import LogoBgCircle from '../../icons/LogoBgCircle';
import Phone from "../../../components/icons/Phone";
import Telegram from "../../../components/icons/Telegram";
import Viber from "../../../components/icons/Viber";
import Email from "../../../components/icons/Email";
import Instagram from "../../../components/icons/Instagram";
import Facebook from "../../../components/icons/Facebook";
import Linkedin from "../../../components/icons/Linkedin";
import Whatsapp from "../../../components/icons/Whatsapp";
import { useTranslation } from 'react-i18next';
import "./Footer.scss";
import CurrentYear from './CurrentYear';

const Footer = () => {
    const {t} = useTranslation();

    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer-main">
                    <div className="footer-main__logo">
                        <div className="footer-main__footer-logo">
                            <Link to={'/'} className="footer-logo__link">
                                <div className="footer-logo__link-img">
                                    <img className="footer-logo__img" src={logo} alt="Anonym" />
                                    <div className="footer-logo__bg">
                                        <LogoBgStable />
                                        <LogoBgCircle />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="footer-main__desc">
                            <p>{t("footerDesc")}</p>
                        </div>
                    </div>
                    <div className="footer-main__links">
                        <div className="title">{t("footerPages")}</div>
                        <div className="footer-main__pages">
                            <Link to={'/'}>
                                {t("about")}
                            </Link>
                            <Link to={'/services'}>{t("services")}</Link>
                            <Link to={'/contacts'}>{t("contacts")}</Link>
                        </div>
                    </div>
                    <div className="footer-main__contacts">
                        <div className="footer-main__phone">
                            <div className="title">{t("phones")}</div>
                            <div className="info-phone__links">
                                <div className="info-phone__pic">
                                    <Phone />
                                </div>
                                <div className="info-phone__numbs">
                                    <a href="tel:123-456-7890">+38 (012) 456-78-90</a>
                                    <a href="tel:123-456-7890">+38 (012) 456-78-90</a>
                                    <a href="tel:123-456-7890">+38 (012) 456-78-90</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-main__messenger">
                            <div className="title">{t("messengers")}</div>
                            <div className="info-socials__links">
                                <a href="https://t.me/+380123456789">
                                    <Telegram />
                                </a>
                                <a href="viber://chat?number=%2B380123456789">
                                    <Viber />
                                </a>
                                <a href="https://wa.me/+380123456789">
                                    <Whatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main__contacts">
                        <div className="footer-main__email">
                            <div className="title">{t("footerMail")}</div>
                            <div className="info-phone__links">
                                <div className="info-phone__pic">
                                    <Email />
                                </div>
                                <div className="info-phone__numbs">
                                    <a href="mailto:sales@anonym.digital">sales@anonym.digital</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-main__socials">
                            <div className="title">{t("footerSocial")}</div>
                            <div className="info-socials__links">
                                <a href="https://www.instagram.com/noname_digital/">
                                    <Instagram />
                                </a>
                                <a href="https://www.facebook.com/Noname-Digital-103906449126333">
                                    <Facebook />
                                </a>
                                <a href="https://www.linkedin.com/company/nonamed/">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <span className="copyright"><CurrentYear /> © Developed by Yeva Vlasova</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;