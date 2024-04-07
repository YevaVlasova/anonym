import ContactsItem from '../ContactsItem/ContactsItem';
import './ContactsList.scss';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ContactsList = () => {
    const {t, i18n } = useTranslation();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const translatedItems = [
            {
                id: 9,
                country: t("countryUk"),
                address: t("addressUk"),
                mail: "sales@anonym.digital",
                tags: [
                    {
                        number: "+38 (012) 345-67-89"
                    },
                    {
                        number: "+38 (012) 345-67-89"
                    },
                    {
                        number: "+38 (012) 345-67-89"
                    },
                ],
            },
            {
                id: 10,
                country: t("countryPol"),
                address: t("addressPol"),
                mail: "sales@anonym.digital",
                tags: [
                    {
                        number: "+38 (012) 345-67-89"
                    },
                    {
                        number: ""
                    },
                    {
                        number: ""
                    },
                ],
            },
            {
                id: 11,
                country: t("countryUs"),
                address: "",
                mail: "sales@anonym.digital",
                tags: [
                    {
                        number: "+38 (012) 345-67-89"
                    },
                    {
                        number: ""
                    },
                    {
                        number: ""
                    },
                ],
            },
            {
                id: 12,
                country: t("countryIs"),
                address: t("addressIs"),
                mail: "sales@anonym.digital",
                tags: [
                    {
                        number: "+38 (012) 345-67-89"
                    },
                    {
                        number: ""
                    },
                    {
                        number: ""
                    },
                ],
            },
            {
                id: 13,
                country: t("countryFr"),
                address: "",
                mail: "sales@anonym.digital",
                tags: [
                    {
                        number: ""
                    },
                    {
                        number: ""
                    },
                    {
                        number: ""
                    },
                ],
            },
            {
                id: 14,
                country: t("countryCa"),
                address: "",
                mail: "sales@anonym.digital",
                tags: [
                    {
                        number: "+38 (012) 345-67-89"
                    },
                    {
                        number: ""
                    },
                    {
                        number: ""
                    },
                ],
            },

        ];
        setItems(translatedItems);
    }, [i18n.language]);
        
    return (
        <div className="contacts">
            <div className="contacts__list">
                {items && items.map((item, id) => {
                    return (
                        <ContactsItem key={id} country={item.country} address={item.address} mail={item.mail} tags={item.tags} />
                    )
                })}
            </div>
        </div>
    );
};
export default ContactsList;