// IMPORTS
// import './services.css'
import { Link } from 'react-router-dom'

// ASSETS
import bookiImg from '../../assets/mathilde-hetru-booki-OC.jpg'
import myfoodImg from '../../assets/mathilde-hetru-projet-oh-my-food.jpg'


// COMPONENTS
// import Cardlocation from '../../components/CardLocation/Cardlocation'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Services() {
   return (
    <>
       <section className="projects-mh" id="projects">
        <h1 className="projects-mh__title">Portfolio</h1>
        <nav className="projects-mh-nav">
            <a href="#projects" className="projects-mh-nav__text" id="all-projects">Tous les projets</a><span className="projects-mh-nav__slash"> / </span>
            <a href="#projects" className="projects-mh-nav__text" id="dev-web">Développement web</a><span className="projects-mh-nav__slash"> / </span>
            <a href="#projects" className="projects-mh-nav__text" id="illustration">Illustration</a><span className="projects-mh-nav__slash"> / </span>
            <a href="#projects" className="projects-mh-nav__text" id="troisD">Réseaux sociaux</a><span className="projects-mh-nav__slash"> / </span>
            <a href="#projects" className="projects-mh-nav__text" id="graphic-design">Packaging</a><span className="projects-mh-nav__slash"> / </span>
            <a href="#projects" className="projects-mh-nav__text" id="illustration">Edition_Print</a><span className="projects-mh-nav__slash"> / </span>
            <a href="#projects" className="projects-mh-nav__text" id="troisD">Branding</a><span className="projects-mh-nav__slash"> / </span>
            <a href="#projects" className="projects-mh-nav__text" id="photo">Evénementiel</a>
        </nav>
        <section className="projects-mh-section">
            {/* <a href="booki.html" className="projects-mh-section__link_dev-web"> */}
            <Link to="/booki" className="projects-mh-section__link_dev-web">
                <div className="projects-mh-section-card">
                    <span className="projects-mh-section-card__text">Booki</span>
                </div>
                <div className="projects-mh-section__blue"></div>
                <img src={bookiImg} alt="Mathilde-Hetru-projet" className="projects-mh-section__img"/>
            </Link>
            {/* </a> */}
            <a href="oh-my-food.html" className="projects-mh-section__link_dev-web">
                <div className="projects-mh-section-card">
                    <span className="projects-mh-section-card__text">Oh my Food</span>
                </div>
                <div className="projects-mh-section__blue"></div>
                <img src={myfoodImg} alt="Mathilde-Hetru-projet" className="projects-mh-section__img"/>
            </a>
        </section>     
        </section>
    </>
   )
 }
 
 export default Services
