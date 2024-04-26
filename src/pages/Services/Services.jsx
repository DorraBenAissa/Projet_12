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
        <section className="services-page" id="services">
        <h1 className="services-page__title">Mes services</h1>
        <div className="services-page-list">
            <div className="services-page-list-bulle">
                <img src={sWeb} alt="icone-web-Mathilde-Hetru" className="services-page-list-bulle__img"/>
                <h3 className="services-page-list-bulle__title">Web</h3>
                <p className="services-page-list-bulle__text">
                    Maquettes<br/>
                    Intégration web<br/>
                    Développement web<br/>
                    Webmastering<br/>
                </p>
            </div>
            <div className="services-page-list-bulle">
                <img src={sCreation} alt="icone-creation-Mathilde-Hetru" className="services-page-list-bulle__img"/>
                <h3 className="services-page-list-bulle__title">Création</h3>
                <p className="services-page-list-bulle__text">
                    Logo / Identité visuelle<br/>
                    Carte de visite<br/>
                    Pictogrammes<br/>
                    Image de marque / Lancement d'un produit<br/>Visuels réseaux sociaux
                </p>
            </div>
            <div className="services-page-list-bulle">
                <img src={sMiseEnPage} alt="icone-mise-en-page-Mathilde-Hetru" className="services-page-list-bulle__img"/>
                <h3 className="services-page-list-bulle__title">Mise en page</h3>
                <p className="services-page-list-bulle__text">
                    Affiches / Flyers<br/>
                    Plaquettes / Dépliants<br/>
                    Livres / Magazines<br/>
                    Éxecution de packagings<br/>Notices
                </p>
            </div>
            <div className="services-page-list-bulle">
                <img src={sIllustrations} alt="icone-illustrations-Mathilde-Hetru" className="services-page-list-bulle__img"/>
                <h3 className="services-page-list-bulle__title">Illustrations</h3>
                <p className="services-page-list-bulle__text">
                    Éditions<br/>
                    Communication visuelle<br/>
                    Illustrations sur-mesure<br/>
                    Print<br/>
                    Faire-parts / Livrets<br/>Carte de remerciements
                </p>
            </div>
        </div>
    </section>
    <section className="services-step" id="step">
        <h1 className="services-step__title">Les étapes d'un projet</h1>
        <div className="services-step-list">
            <div className="services-step-list-bulle">
                <img src={sContact} alt="icone-contact-Mathilde-Hetru" className="services-step-list-bulle__img"/>
                <h3 className="services-step-list-bulle__title">Prise de contact</h3>
                <p className="services-step-list-bulle__text">
                    Envoyez-moi un mail ou un message explicatif de votre idée et discutons ensemble de votre projet !<br/>
                    <br/>Nous pouvons convenir d’un RDV téléphonique si vous le souhaitez.
                </p>
            </div>
            <div className="services-step-list-bulle">
                <img src={sMiseEnPlace} alt="icone-mise-en-place-Mathilde-Hetru" className="services-step-list-bulle__img"/>
                <h3 className="services-step-list-bulle__title">Mise en place</h3>
                <p className="services-step-list-bulle__text">
                    Je reviens vers vous avec une date estimée selon mon planning, un récapitulatif des étapes de votre projet et un devis. Un acompte de 50% sera également demandé au démarrage de la prestation.<br/>
                    <br/>Bien sûr, je vous accompagnerai tout au long de votre projet avec mes conseils et mon expérience !
                </p>
            </div>
            <div className="services-step-list-bulle">
                <img src={sEtapes} alt="icone-etapes-Mathilde-Hetru" className="services-step-list-bulle__img"/>
                <h3 className="services-step-list-bulle__title">Étapes de réalisation</h3>
                <p className="services-step-list-bulle__text">
                    Je réalise les différentes étapes de production dont nous avons discuté précedemment.<br/>
                    <br/>
                    Cela peut être un croquis, plusieurs propositions de visuels, un moodboard... La piste qui vous plait le plus et qui correspond au mieux à vos critères est sélectionnée.<br/>
                    <br/>Un certain nombre d’allers/retours peut également être envisagé.
                </p>
            </div>
            <div className="services-step-list-bulle">
                <img src={sFinalisation} alt="icone-final-Mathilde-Hetru" className="services-step-list-bulle__img"/>
                <h3 className="services-step-list-bulle__title">Finalisation</h3>
                <p className="services-step-list-bulle__text">
                    Une fois que tout est finalisé, je vous envoie les fichiers finaux dans les formats qui correspondent à vos besoins en <strong>Google Drive.</strong>
                    <br/>
                    <br/>Je peux également vous accompagner et vous conseiller sur l’impression ainsi que sur l'utilisation de vos fichiers.
                </p>
            </div>
        </div>
    </section>
    <section className="xp-services">
        <h1 className="xp-services__title">Mes réferences</h1>
        <p className="xp-services__text">J'ai eu le plaisir de travailler avec</p>
        <div className="xp-services-list">
            <a href="https://www.linkedin.com/in/sixiemesens-agency-5033aa68/" target="_blank" className="xp-services-list__link">
                <img src={sixSensLogo} alt="xp1-Mathilde-Hetru" className="xp-services-list__img"/>
            </a>
            <a href="https://www.linkedin.com/company/pharmalyslabs/" target="_blank" className="xp-services-list__link">
                <img src={pharmalysLogo} className="xp-services-list__img"/>
            </a>
        
        </div>
    </section>
    <section className="commande-portrait">
        <h1 className="commande-portrait__text">Je vous aide à concrêtiser vos idées ?</h1>
        <a href="mailto:dorra.benaissaghariani@gmail.com">
            <img src={envelopeLogo} className="commande-portrait__img" alt="mail"/>
        </a>
        <a href="mailto:dorra.benaissaghariani@gmail.com" className="commande-portrait-btn">
            <span className="commande-portrait-btn__text">Me contacter par email</span>
        </a>
    </section>
    </>
   )
 }
 
 export default Services
