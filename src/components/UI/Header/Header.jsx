import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/Logo.svg';
import LanguageSelector from "../languageSelector";
import { useTranslation } from 'react-i18next';
import "./Header.scss"

const Header = () => {
    const {t} = useTranslation();

    const location = useLocation();
    
    return (
        <header className="header">
            <div className="header__container container">
                <Link to={'/'} className="header__logo">
                    <img src={logo} alt="Anonym" />
                </Link>
                <div className="header__nav">
                    <div className="header__about">
                        <Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>
                            {t("about")}
                        </Link>
                    </div>
                    <Link to={'/services'} className={location.pathname === '/services' ? 'active' : ''}>{t("services")}</Link>
                    <Link to={'/contacts'} className={location.pathname === '/contacts' ? 'active' : ''}>{t("contacts")}</Link>
                </div>
                <div className="header__language dropdown">
                    <button className="dropbtn">{t("switcher")}</button>
                    <div className="dropdown__content">
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;