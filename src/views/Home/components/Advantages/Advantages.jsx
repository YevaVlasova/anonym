import './Advantages.scss'
import ListIcon from '../../../../components/icons/ListIcon';
import { useTranslation } from 'react-i18next';

const Advantages = () => {
    const {t} = useTranslation();
    return (
        <section className='advantage-main container wrapper'>
            <div id="advantages" className="advantage-main__container">
                <div className="advantage-main__title">
                    <h3>{t("advantageTitle")}</h3>
                </div>
                <div className="advantage-card">
                    <div className="advantage-card__info">
                        <div className="advantage-card__info-title">
                            <h3>{t("advantageSubTitle1")}</h3>
                        </div>
                        <div className="advantage-card__info-desc">
                            <p>{t("advantageDesc1")}</p>
                        </div>
                        <div className="advantage-card__info-list">
                            <div className="info-list__item">
                                <div className="info-list__info">
                                    <ListIcon />
                                    <div className="info-list__info-desc">
                                        <h4 className="info-list__title">{t("advantageFin")}</h4>
                                        <p className="info-list__desc">{t("advantageFinDesc")}</p>
                                    </div>
                                </div>
                                <div className="info-list__info">
                                    <ListIcon />
                                    <div className="info-list__info-desc">
                                        <h4 className="info-list__title">{t("advantageLeg")}</h4>
                                        <p className="info-list__desc">{t("advantageLegDesc")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="advantage-card__img1">
                        <img src="../../../../public/advantage1.webp" alt="Anonym" />
                    </div>
                </div>
                <div className="advantage-card _left">
                    <div className="advantage-card__info">
                        <div className="advantage-card__info-title">
                            <h3>{t("advantageSubTitle2")}</h3>
                        </div>
                        <div className="advantage-card__info-desc">
                            <p>{t("advantageDesc2")}</p>
                        </div>
                        <div className="advantage-card__info-list">
                            <div className="info-list__item">
                                <div className="info-list__info">
                                    <ListIcon />
                                    <div className="info-list__info-desc">
                                        <h4 className="info-list__title">{t("advantageTim")}</h4>
                                        <p className="info-list__desc">{t("advantageTimDesc.line1")}<br />
                                            {t("advantageTimDesc.line2")}</p>
                                    </div>
                                </div>
                                <div className="info-list__info">
                                    <ListIcon />
                                    <div className="info-list__info-desc">
                                        <h4 className="info-list__title">{t("advantageCon")}</h4>
                                        <p className="info-list__desc">{t("advantageConDesc.line1")}<br />
                                            {t("advantageConDesc.line2")}</p>
                                    </div>
                                </div>
                                <div className="info-list__info">
                                    <ListIcon />
                                    <div className="info-list__info-desc">
                                        <h4 className="info-list__title">{t("advantageCom")}</h4>
                                        <p className="info-list__desc">{t("advantageComDesc.line1")}<br />
                                            {t("advantageComDesc.line2")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="advantage-card__img2">
                        <img src="../../../../public/advantage2.webp" alt="Anonym" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;