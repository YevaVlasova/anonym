import React from "react";
import { Link } from "react-router-dom";
import "./OurContacts.scss";
import Phone from "../../../../components/icons/Phone";
import Telegram from "../../../../components/icons/Telegram";
import Viber from "../../../../components/icons/Viber";
import Whatsapp from "../../../../components/icons/Whatsapp";
import ContactsList from "../ContactsList/ContactsList";
import { useTranslation } from 'react-i18next';

const OurContacts = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="our-contacts__container">
                <h2 className="our-contacts__title">{t("our")}</h2>
                <div className="our-contacts__breadcrumbs">
                    <div className="breadcrumbs">
                        <Link to={'/'} className="breadcrumbs__link">{t("bread1")}</Link>
                        <h4 className="breadcrumbs__title title _mb0">{t("bread2")}</h4>
                    </div>
                </div>
                <div className="our-contacts__info">
                    <div className="our-contacts__info-phone">
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
                    <div className="our-contacts__info-socials">
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
                <ContactsList />
            </div>
        </>
    );
}

export default OurContacts;