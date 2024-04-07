import { Link } from "react-router-dom";
import React, { useState, useCallback } from "react";
import './ServicePage.scss';
import { useTranslation } from 'react-i18next';

const ServicePage = (props) => {
    const {t} = useTranslation();

    const handleClick = () => {
        props.onChildClick(props.tab)
    };
    return (
        <div className="service-page">
            <div className="service-page__top">
                <div className="service-page__title">{props.title}</div>
                <div className="breadcrumbs">
                    <Link to={'/'} className="breadcrumbs__link">{t("bread1")}</Link>
                    <h4 className="breadcrumbs__title title _mb0">{props.title}</h4>
                </div>
            </div>
            <div className="service-page__info">
                <div className="service-page__desc">
                    <p>{props.desc}</p>
                </div>
                <div className="service-page__img">
                    <img src={props.pic} alt={props.picAlt} />
                </div>
            </div>
        </div>
    );
};
export default ServicePage;