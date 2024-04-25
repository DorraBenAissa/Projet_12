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



function Services() {
   return (
    <>
        <section class="services-page" id="services">
        <h1 class="services-page__title">Mes services</h1>
        <div class="services-page-list">
            <div class="services-page-list-bulle">
                <img src={sWeb} alt="icone-web-Mathilde-Hetru" class="services-page-list-bulle__img"/>
                <h3 class="services-page-list-bulle__title">Web</h3>
                <p class="services-page-list-bulle__text">
                    Maquettes<br/>
                    Intégration web<br/>
                    Développement web<br/>
                    Webmastering<br/>
                </p>
            </div>
            <div class="services-page-list-bulle">
                <img src={sCreation} alt="icone-creation-Mathilde-Hetru" class="services-page-list-bulle__img"/>
                <h3 class="services-page-list-bulle__title">Création</h3>
                <p class="services-page-list-bulle__text">
                    Logo / Identité visuelle<br/>
                    Carte de visite<br/>
                    Pictogrammes<br/>
                    Image de marque / Lancement d'un produit<br/>Visuels réseaux sociaux
                </p>
            </div>
            <div class="services-page-list-bulle">
                <img src={sMiseEnPage} alt="icone-mise-en-page-Mathilde-Hetru" class="services-page-list-bulle__img"/>
                <h3 class="services-page-list-bulle__title">Mise en page</h3>
                <p class="services-page-list-bulle__text">
                    Affiches / Flyers<br/>
                    Plaquettes / Dépliants<br/>
                    Livres / Magazines<br/>
                    Éxecution de packagings<br/>Notices
                </p>
            </div>
            <div class="services-page-list-bulle">
                <img src={sIllustrations} alt="icone-illustrations-Mathilde-Hetru" class="services-page-list-bulle__img"/>
                <h3 class="services-page-list-bulle__title">Illustrations</h3>
                <p class="services-page-list-bulle__text">
                    Éditions<br/>
                    Communication visuelle<br/>
                    Illustrations sur-mesure<br/>
                    Print<br/>
                    Faire-parts / Livrets<br/>Carte de remerciements
                </p>
            </div>
        </div>
    </section>
    <section class="services-step" id="step">
        <h1 class="services-step__title">Les étapes d'un projet</h1>
        <div class="services-step-list">
            <div class="services-step-list-bulle">
                <img src={sContact} alt="icone-contact-Mathilde-Hetru" class="services-step-list-bulle__img"/>
                <h3 class="services-step-list-bulle__title">Prise de contact</h3>
                <p class="services-step-list-bulle__text">
                    Envoyez-moi un mail ou un message explicatif de votre idée et discutons ensemble de votre projet !<br/>
                    <br/>Nous pouvons convenir d’un RDV téléphonique si vous le souhaitez.
                </p>
            </div>
            <div class="services-step-list-bulle">
                <img src={sMiseEnPlace} alt="icone-mise-en-place-Mathilde-Hetru" class="services-step-list-bulle__img"/>
                <h3 class="services-step-list-bulle__title">Mise en place</h3>
                <p class="services-step-list-bulle__text">
                    Je reviens vers vous avec une date estimée selon mon planning, un récapitulatif des étapes de votre projet et un devis. Un acompte de 50% sera également demandé au démarrage de la prestation.<br/>
                    <br/>Bien sûr, je vous accompagnerai tout au long de votre projet avec mes conseils et mon expérience !
                </p>
            </div>
            <div class="services-step-list-bulle">
                <img src={sEtapes} alt="icone-etapes-Mathilde-Hetru" class="services-step-list-bulle__img"/>
                <h3 class="services-step-list-bulle__title">Étapes de réalisation</h3>
                <p class="services-step-list-bulle__text">
                    Je réalise les différentes étapes de production dont nous avons discuté précedemment.<br/>
                    <br/>
                    Cela peut être un croquis, plusieurs propositions de visuels, un moodboard... La piste qui vous plait le plus et qui correspond au mieux à vos critères est sélectionnée.<br/>
                    <br/>Un certain nombre d’allers/retours peut également être envisagé.
                </p>
            </div>
            <div class="services-step-list-bulle">
                <img src={sFinalisation} alt="icone-final-Mathilde-Hetru" class="services-step-list-bulle__img"/>
                <h3 class="services-step-list-bulle__title">Finalisation</h3>
                <p class="services-step-list-bulle__text">
                    Une fois que tout est finalisé, je vous envoie les fichiers finaux dans les formats qui correspondent à vos besoins en <strong>Google Drive.</strong>
                    <br/>
                    <br/>Je peux également vous accompagner et vous conseiller sur l’impression ainsi que sur l'utilisation de vos fichiers.
                </p>
            </div>
        </div>
    </section>
    <section class="xp-services">
        <h1 class="xp-services__title">Mes réferences</h1>
        <p class="xp-services__text">J'ai eu le plaisir de travailler avec</p>
        <div class="xp-services-list">
            <a href="https://www.linkedin.com/in/sixiemesens-agency-5033aa68/" target="_blank" class="xp-services-list__link">
                <img src={sixSensLogo} alt="xp1-Mathilde-Hetru" class="xp-services-list__img"/>
            </a>
            <a href="https://www.linkedin.com/company/pharmalyslabs/" target="_blank" class="xp-services-list__link">
                <img src={pharmalysLogo} class="xp-services-list__img"/>
            </a>
        
        </div>
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
