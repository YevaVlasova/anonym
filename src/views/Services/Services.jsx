import ServicePage from "./ServicePage/ServicePage";
import "./Services.scss";
import ServicesList from './ServicesList/ServicesList';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Services = () => {
    const {t} = useTranslation();

    const [tab, setTab] = useState('1');
    const handleChildClick = (element) => {
        setTab(element);
    };
    return (
        <div className="wrapper">
            <div className="container service__container">
                <div className="service__list">
                    <ServicesList onChildClick={handleChildClick} />
                </div>
                <div className="service__page">
                    {tab === '1' && (
                        <ServicePage 
                            title={t("serviceTitle1")} 
                            pic="../../../../public/5.webp"
                            picAlt="Screen image"
                            desc={t("serviceDesc1")} 
                        /> 
                    )}
                    {tab === '2' && (
                        <ServicePage 
                            title={t("serviceTitle2")} 
                            pic="../../../../public/6.webp"
                            picAlt="Screen image"
                            desc={t("serviceDesc2")} 
                
                        />
                    )}
                    {tab === '3' && (
                        <ServicePage 
                            title={t("serviceTitle3")} 
                            pic="../../../../public/7.webp"
                            picAlt="Screen image"
                            desc={t("serviceDesc3")} 
                        />
                    )}
                    {tab === '4' && (
                        <ServicePage 
                            title={t("serviceTitle4")} 
                            pic="../../../../public/8.webp"
                            picAlt="Screen image"
                            desc={t("serviceDesc4")} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Services;