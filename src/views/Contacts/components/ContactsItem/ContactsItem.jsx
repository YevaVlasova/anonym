import React from 'react';
import './ContactsItem.scss';
import MapPoint from '../../../../components/icons/MapPoint';

const ContactsItem = ({country, address, mail, tags}) => {

    return (
        <>
            <div className="contact-item">
                <div className="contact-item__country">
                    <MapPoint />
                    {country}
                </div>
                <div className="contact-item__info">
                    <div className="contact-item__address">
                        {address}
                    </div>
                    <div className="contact-item__mail">
                        <a href={`mailto:${mail}`}>{mail}</a>
                    </div>
                    <div className="contact-item__phones">
                        {tags.map((tag => {
                            return (
                                <div className="contact-item__number">
                                    <a href={`tel:${tag.number}`}>{tag.number}</a>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContactsItem;