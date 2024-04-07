import React from "react";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import './languageSelector.scss'

const languages = [
    {code: "en", lang: "English"},
    {code: "uk", lang: "Українська"}
];

const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const {t} = useTranslation()

    return (
        <div className="header__btn dropdown">
            {languages.map((lng) => {
                return (
                    <button 
                        className={lng.code === i18n.language ? "selected" : ""} 
                        key={lng.code} 
                        onClick={() => changeLanguage(lng.code)}
                    >
                        {lng.lang}
                    </button>
                )
            })}
        </div>
    )
}

export default LanguageSelector;