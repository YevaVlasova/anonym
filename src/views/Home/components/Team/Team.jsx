import './Team.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Team = () => {
    const {t} = useTranslation();
    return (
        <section className='second wrapper'>
            <div className="container team">
                <div className="team__title">{t("teamTitle")}</div>
                <div className="team-list">
                    <Carousel
                        showArrows={true}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        useKeyboardArrows={true}
                        autoPlay={true}
                        stopOnHover={true}
                        swipeable={true}
                        dynamicHeight={false}
                        emulateTouch={true}
                        infiniteLoop={true}
                        centerMode={true}
                        centerSlidePercentage={12}
                    >
                        <div className="box _grad1">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/1.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Founder/CEO</h3>
                                    <p>{t("teamName1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad2">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/2.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>CFO/CLO</h3>
                                    <p>{t("teamName2")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad3">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/3.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>CTO</h3>
                                    <p>{t("teamName3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad4">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/4.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Head of PM</h3>
                                    <p>{t("teamName4")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad1">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/5.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Head of Sales & Marketing</h3>
                                    <p>{t("teamName5")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad2">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/6.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Head of Design</h3>
                                    <p>{t("teamName6")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad3">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/7.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Head of Frontend</h3>
                                    <p>{t("teamName7")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad4">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/8.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Head of Backend</h3>
                                    <p>{t("teamName8")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad1">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/9.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>PM</h3>
                                    <p>{t("teamName9")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad2">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/10.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>UI/UX Designer</h3>
                                    <p>{t("teamName10")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad3">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/11.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>SMM manager</h3>
                                    <p>{t("teamName11")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad4">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/12.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Middle Web Dev (React)</h3>
                                    <p>{t("teamName12")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad1">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/13.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>Frontend developer</h3>
                                    <p>{t("teamName13")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad2">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/14.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>junior web dev (React)</h3>
                                    <p>{t("teamName14")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad3">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/15.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>junior web dev (React)</h3>
                                    <p>{t("teamName15")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box _grad4">
                            <span></span>
                            <div className="content">
                                <div className="content__img"><img src="../../../../../public/team/16.webp" alt="" /></div>
                                <div className="content__info">
                                    <h3>junior frontend developer (React)</h3>
                                    <p>{t("teamName16")}</p>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Team;