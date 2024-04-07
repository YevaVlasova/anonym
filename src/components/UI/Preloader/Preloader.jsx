import "./Preloader.scss";
import logo from '../../../assets/Logo.svg';
import LogoBgStable from '../../../components/icons/LogoBgStable';
import LogoBgCircle from '../../../components/icons/LogoBgCircle';

const Preloader = () => {
    
    return (
        <div className="preloader">
            <div className="preloader__bg">
                <div className="preloader__img">
                    <img className="preloader__logo" src={logo} alt="Anonym" />
                    <div className="preloader__elements">
                        <LogoBgStable />
                        <LogoBgCircle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;