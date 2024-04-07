import './ServicesItem.scss';
import React, { useState } from 'react';

const ServicesItem = ({ onChildClick, tab, title, src, alt, isActive, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(tab);
        onChildClick(tab);
    };
    return (
        <>
            <div className={`services-item ${isActive ? 'active' : ''}`} onClick={handleClick}>
                <div className="services-item__img">
                    <img src={src} alt={alt} />
                </div>
                <h3 className="services-item__title">{title}</h3>
            </div>
        </>
    );
};
export default ServicesItem;