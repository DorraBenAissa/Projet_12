// IMPORTS
// import './services.css'
import { Link } from 'react-router-dom'

// ASSETS
import booki from '../../assets/mathilde-hetru-booki-OC.jpg'
import arrow from '../../assets/competence-mathilde-hetru_arrow.png'
import earthImg from '../../assets/link-earth-mathilde-hetru.png'

// COMPONENTS
// import Cardlocation from '../../components/CardLocation/Cardlocation'



function Services() {
   return (
    <>
       <section class="presentation-projet">
        <div class="presentation-projet-btns">
            <div class="presentation-projet-card">
                <span class="presentation-projet-card__text">Booki</span>
            </div>
            <div class="presentation-projet-back">
                {/* <a href="index.html#projects" class="presentation-projet-back__link"> */}
                <Link to="/portfolio" className="presentation-projet-back__link">
                    <img src={arrow} alt="icone1-Mathilde-Hetru" class="presentation-projet-back__arrow"/>
                    <span class="presentation-projet-back__text">Retour au portfolio</span>
                </Link>
                {/* </a> */}
            </div>
        </div>
        <div class="presentation-projet-logs">
            <div class="presentation-projet-bluebtn">
                <span class="presentation-projet-bluebtn__text">Developpement web</span>
            </div>
            <div class="presentation-projet-yellowbtn">
                <span class="presentation-projet-yellowbtn__text">HTML 5</span>
            </div>
            <div class="presentation-projet-yellowbtn">
                <span class="presentation-projet-yellowbtn__text">CSS 3</span>
            </div>
            <div class="presentation-projet-yellowbtn">
                <span class="presentation-projet-yellowbtn__text">GitHub</span>
            </div>
            <div class="presentation-projet-yellowbtn">
                <span class="presentation-projet-yellowbtn__text">Visual Studio Code</span>
            </div>
        </div>
            
        <h3 class="presentation-projet-text">
            Deuxième projet de la formation "Développeur web" d'OpenClassrooms.<br/>
            L'objectif est d'intégrer une maquette de site de réservation de chambres d'hôtes en HTML 5 et CSS 3. 
        </h3>
        <a href="https://github.com/DorraBenAissa" target="_blank" class="presentation-projet__link"><img src={earthImg} alt="link-Mathilde-Hetru" class="presentation-projet__earth"/></a>   
    </section>

    <section class="image-projet-nogrid">
        <a href="https://github.com/DorraBenAissa" target="_blank" class="presentation-projet__link"><img src={booki} class="image-projet__img" alt="reservia-Mathilde-hetru"/></a>
    </section>
    </>
   )
 }
 
 export default Services
