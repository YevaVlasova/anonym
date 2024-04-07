import React, { useState } from 'react';
import ServicesItem from '../ServicesItem/ServicesItem';
import './ServicesList.scss';
import { useTranslation } from 'react-i18next';

const ServicesList = ({ onChildClick }) => {
    const {t} = useTranslation();

    const [activeTab, setActiveTab] = useState("1");

    return (
        <div className="services">
            <div className="services__list">
                <ServicesItem
                    onChildClick={onChildClick}
                    tab="1"
                    title={t("serviceTitle1")} 
                    src="../../../../public/1.webp"
                    alt={t("serviceTitle1")} 
                    isActive={activeTab === "1"}
                    setActiveTab={setActiveTab}
                />
                <ServicesItem
                    onChildClick={onChildClick}
                    tab="2"
                    title={t("serviceTitle2")} 
                    src="../../../../public/2.webp"
                    alt={t("serviceTitle2")} 
                    isActive={activeTab === "2"}
                    setActiveTab={setActiveTab}
                />
                <ServicesItem
                    onChildClick={onChildClick}
                    tab="3"
                    title={t("serviceTitle3")} 
                    src="../../../../public/3.webp"
                    alt={t("serviceTitle3")} 
                    isActive={activeTab === "3"}
                    setActiveTab={setActiveTab}
                />
                <ServicesItem
                    onChildClick={onChildClick}
                    tab="4"
                    title={t("serviceTitle4")} 
                    src="../../../../public/4.webp"
                    alt={t("serviceTitle4")} 
                    isActive={activeTab === "4"}
                    setActiveTab={setActiveTab}
                />
            </div>
        </div>
    );
};
export default ServicesList;