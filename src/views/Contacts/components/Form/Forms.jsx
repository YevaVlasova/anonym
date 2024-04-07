import Arrow from '../../../../components/icons/Arrow';
import './Forms.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Forms = () => {
    const {t} = useTranslation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Message:', message);

        setName('');
        setPhone('');
        setMessage('');
      };

    return (
        <>
            <div className="forms">
                <div className="forms__arrows">
                    <Arrow />
                    <Arrow />
                </div>
                <h3 className="title">{t("formTitle")}</h3>
                <form className="forms-container" onSubmit={handleSubmit}>
                    <div className='forms__field'>
                        <input className='forms__input'
                        type="text"
                        placeholder={t("formName")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div className='forms__field'>
                        <input className='forms__input'
                        type="tel"
                        placeholder="098-000-00-00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        required
                        />
                    </div>
                    <div className='forms__field'>
                        <textarea className='forms__input'
                        placeholder={t("formText")}
                        value={message}
                        rows={8}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        />
                    </div>
                    <button className='forms__btn' type="submit">{t("formBtn")}</button>
                </form>
            </div>
        </>
    );
}

export default Forms;