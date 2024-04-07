import { Link, animateScroll as scroll } from "react-scroll";
import './Home.scss'
import Advantages from './components/Advantages/Advantages';
import Team from './components/Team/Team';

const Home = () => {
    return (
        <>
            <section className='home-main container wrapper'>
                <div className='home-main__screen'>
                    <div className="home-main__title">
                        <h1>
                            <span>Digitalize </span>
                            Your
                        </h1>
                        <h1>
                            <span>Space </span>
                            With us
                        </h1>
                    </div>
                    <div className="home-main__img">
                        <div className="home-main__pic">
                            <img src="../../../public/planet2.webp" alt="" />
                        </div>
                        <div className="home-main__pic">
                            <img src="../../../public/planet1.webp" alt="" />
                        </div>
                    </div>
                    <div className="home-main__scroll">
                        <div className='home-main__line'></div>
                        <Link to="advantages" smooth={true} duration={500}>
                            <h5>Scroll</h5>
                        </Link>
                    </div>
                </div>
            </section>
            <Advantages />
            <Team />
        </>
        
    );
}

export default Home;