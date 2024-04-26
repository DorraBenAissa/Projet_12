// IMPORTS
// import './services.css'

// ASSETS
import envelopeLogo from '../../assets/mathilde-hetru-enveloppe.png'

// COMPONENTS
// import Cardlocation from '../../components/CardLocation/Cardlocation'



function Services() {
   return (
    <>
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
