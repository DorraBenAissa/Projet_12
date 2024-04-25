// IMPORTS
import './services.css'

// ASSETS
import sWeb from '../../assets/services/mathilde-hetru-services_web.svg'
import sCreation from '../../assets/services/mathilde-hetru-services_creation.svg'
import sMiseEnPage from '../../assets/services/mathilde-hetru-services_mise-en-page.svg'
import sIllustrations from '../../assets/services/mathilde-hetru-services_illustrations.svg'
import sContact from '../../assets/services/mathilde-hetru-services_contact.svg' 
import sMiseEnPlace from '../../assets/services/mathilde-hetru-services_mise-en-place.svg'
import sEtapes from '../../assets/services/mathilde-hetru-services_etapes.svg'
import sFinalisation from '../../assets/services/mathilde-hetru-services_finalisation.svg'

import sixSensLogo from '../../assets/mathilde-hetru-_boulanger.png'
import pharmalysLogo from '../../assets/photo.svg' 
import envelopeLogo from '../../assets/mathilde-hetru-enveloppe.png'

// COMPONENTS
// import Cardlocation from '../../components/CardLocation/Cardlocation'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Services() {
   return (
    <>
         <section class="projects-mh" id="projects">
        <h1 class="projects-mh__title">Portfolio</h1>
        <nav class="projects-mh-nav">
            <a href="#projects" class="projects-mh-nav__text" id="all-projects">Tous les projets</a><span class="projects-mh-nav__slash"> / </span>
            <a href="#projects" class="projects-mh-nav__text" id="dev-web">Développement web</a><span class="projects-mh-nav__slash"> / </span>
            <a href="#projects" class="projects-mh-nav__text" id="illustration">Illustration</a><span class="projects-mh-nav__slash"> / </span>
            <a href="#projects" class="projects-mh-nav__text" id="troisD">Réseaux sociaux</a><span class="projects-mh-nav__slash"> / </span>
            <a href="#projects" class="projects-mh-nav__text" id="graphic-design">Packaging</a><span class="projects-mh-nav__slash"> / </span>
            <a href="#projects" class="projects-mh-nav__text" id="illustration">Edition_Print</a><span class="projects-mh-nav__slash"> / </span>
            <a href="#projects" class="projects-mh-nav__text" id="troisD">Branding</a><span class="projects-mh-nav__slash"> / </span>
            <a href="#projects" class="projects-mh-nav__text" id="photo">Evénementiel</a>
        </nav>
        <section class="projects-mh-section">
            <a href="booki.html" class="projects-mh-section__link_dev-web">
                <div class="projects-mh-section-card">
                    <span class="projects-mh-section-card__text">Booki</span>
                </div>
                <div class="projects-mh-section__blue"></div>
                <img src={bookiImg} alt="Mathilde-Hetru-projet" class="projects-mh-section__img"/>
            </a>
            <a href="oh-my-food.html" class="projects-mh-section__link_dev-web">
                <div class="projects-mh-section-card">
                    <span class="projects-mh-section-card__text">Oh my Food</span>
                </div>
                <div class="projects-mh-section__blue"></div>
                <img src={myfoodImg} alt="Mathilde-Hetru-projet" class="projects-mh-section__img"/>
            </a>
        </section>     
        </section>
        
        <section class="xp-mh">
        <a href="https://www.boulanger.com/" target="_blank"  class="xp-mh__link"><img src={xpiImg} alt="xp1-Mathilde-Hetru" class="xp-mh__img"/></a>
         {/* <a href="https://www.leroymerlin.fr/" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_leroymerlin.png" alt="xp2-Mathilde-Hetru" class="xp-mh__img"></a>
        <a href="https://www.idontthink.fr/" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_idontthinkifeel.png" alt="xp4-Mathilde-Hetru" class="xp-mh__img"></a>
        <a href="https://www.facebook.com/espritdotours" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_espritdo.png" alt="xp3-Mathilde-Hetru" class="xp-mh__img"></a>
        <a class="xp-mh__link"><img src="img/mathilde-hetru-_sgb.png" alt="xp5-Mathilde-Hetru" class="xp-mh__img"/></a>
        <a href="https://www.tuyaux-coveca.com/" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_coveca.png" alt="xp6-Mathilde-Hetru" class="xp-mh__img"/></a>
        <a href="https://www.compagnons-du-devoir.com/regions/nord-pas-de-calais-picardie" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_compagnondudevoir.png" alt="xp7-Mathilde-Hetru" class="xp-mh__img"/></a>
        <a href="https://www.amplitudemel.com/" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_amplitudemel.png" alt="xp8-Mathilde-Hetru" class="xp-mh__img"></a>
        <a href="https://bienvenuechezvero.fr/" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_bienvenuechezvero.png" alt="xp9-Mathilde-Hetru" class="xp-mh__img"></a>
        <a href="https://www.univ-lille.fr/" target="_blank"  class="xp-mh__link"><img src="img/mathilde-hetru-_lille3.png" alt="xp10-Mathilde-Hetru" class="xp-mh__img"></a> */}
        </section>
    
        <section class="commande-portrait">
            <h1 class="commande-portrait__text">Je vous aide à concrêtiser vos idées ?</h1>
            <a href="mailto:dorra.benaissaghariani@gmail.com">
                <img src={envelopeLogo} class="commande-portrait__img" alt="mail"/>
            </a>
            <a href="mailto:dorra.benaissaghariani@gmail.com" class="commande-portrait-btn">
                <span class="commande-portrait-btn__text">Me contacter par email</span>
            </a>
        </section>
    </>
   )
 }
 
 export default Services
