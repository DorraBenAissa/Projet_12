// IMPORTS
import './home.css'

// ASSETS
// import Banner from '../../components/Banner/Banner'
// import BannerImageHome from '../../assets/banner-home.png';
import MathildeHetru2 from '../../assets/MathildeHetru2.png'
import bulleBleueMathildeHetru from '../../assets/bulle-bleue-mathilde-hetru.png'
import cvPDF from '../../assets/CV_Mathilde Hetru.pdf'


import gitLogo from '../../assets/competence-mathilde-hetru_github.png'
import visualstudiocodeLogo from '../../assets/competence-mathilde-hetru_visualstudiocode.png'
import html5Logo from '../../assets/competence-mathilde-hetru_html5.png'
import css3Logo from '../../assets/competence-mathilde-hetru_css3.png'
import sassLogo from '../../assets/competence-mathilde-hetru_sass2.png'
import jsLogo from '../../assets/competence-mathilde-hetru_javascript.png'

import photoShopLogo from '../../assets/competence-mathilde-hetru_photoshop.png'
import illustratorLogo from '../../assets/competence-mathilde-hetru_illustrator.png'
import indesignLogo from '../../assets/competence-mathilde-hetru_indesign.png'
import aftereffectsLogo from '../../assets/competence-mathilde-hetru_aftereffects.png' 
import figmaLogo from '../../assets/competence-dorra_figma.png'

import creativeImg from '../../assets/competence-mathilde-hetru_creative.png'
import rigoureuseImg from '../../assets/competence-mathilde-hetru_rigoureuse.png'
import autonomeImg from '../../assets/competence-mathilde-hetru_autonome.png'
import impliqueeImg from '../../assets/competence-mathilde-hetru_impliquee.png'

import bookiImg from '../../assets/mathilde-hetru-booki-OC.jpg'
import myfoodImg from '../../assets/mathilde-hetru-projet-oh-my-food.jpg'

import xpiImg from '../../assets/mathilde-hetru-_boulanger.png'

// COMPONENTS
// import Cardlocation from '../../components/CardLocation/Cardlocation'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   return (
    <>
        <div class="banniere-mh">
            <img src={MathildeHetru2} alt="Toon-me-Mathilde-Hetru" class="banniere-mh__toonme"/>
            
            <div class="banniere-mh-group">
                <h1 class="banniere-mh-group__title">Dorra Ben Aissa</h1>
                <h2 class="banniere-mh-group__soustitle">Développeuse web _ React / Graphiste </h2>
                <p class="banniere-mh-group__text">Basée à Paris et à mon compte depuis 2023, j'ai entrepris une formation dans le développement web React avec Openclassrooms en Août 2023 pour ajouter une corde à mon arc.
                <br/>
N'hésitez donc pas à parcourir mon portfolio et à m'envoyer un mail ! 
                </p> 
            
                <a href="#about" class="mh-yellowbtn">
                    <span class="mh-yellowbtn__text">Qui suis-je ?</span>
                </a>
            </div>
            
            <img src={bulleBleueMathildeHetru} alt="bulle-bleue-Mathilde-Hetru" class="banniere-mh__bulle-bleue"/>
        </div>
        
        <section class="about-mh" id="about">
        <div class="about-mh-group1">
            <h1 class="about-mh-group1__title">Qui suis-je ?</h1> 
            <p class="about-mh-group1__text">Formée pour être Designer, j'ai obtenu mon premier job en tant que Graphiste en 2011 chez GDC.<br/><br/>
            
            En 2012, après plusieurs mois de salariat, j'ai pris mon envol et j'ai obtenu mon deuxième job en tant que Graphiste chez 'sixieme sens agency' <br/>
            J'ai eu le privilège d'accompagner de grandes marques comme <strong><a href="https://www.novartis.com/fr-fr/"  class="about-mh-group1__link">novartis</a></strong> ou <strong><a href="https://www.abbvie.ca/fr/our-company/about-abbvie.html"  class="about-mh-group1__link">abbVie </a></strong> ou <strong><a href="https://www.boehringer-ingelheim.com/fr"  class="about-mh-group1__link"> Boehringer Ingelheim </a></strong> dans leurs projets.<br/>
            <br/>
            En 2015, j'ai travaillé comme graphiste chez <strong><a href="https://pharmalys.ch/fr" class="about-mh-group1__link">Pharmalys Laboratories Switzerland</a></strong>. Les Laboratoires Pharmalys est une société suisse spécialisée dans la nutrition infantile à travers la fabrication, la distribution et la promotion de préparations pour nourrissons et d'aliments pour bébés haut de gamme dans plus de 50 pays à travers le monde. <br/><br/>          
            J'ai eu le plaisir de travailler avec des <strong><a href="i-dont-think-i-feel.html"  class="about-mh-group1__link">indépendants</a></strong>, des <strong><a href="esprit-do.html"  class="about-mh-group1__link">petits commerces</a></strong> et des <strong><a href="portraits.html"  class="about-mh-group1__link">particuliers</a></strong> et de pouvoir répondre à tous leurs besoins grâce à ma double casquette. <br/>
            <br/>
            Aujourd'hui, je suis retournée à premiers amours : l'informatique et le développement web. <br/>
            J'ai entrepris une formation diplomante avec <strong><a href="https://openclassrooms.com/fr/paths/556-developpeur-web" class="about-mh-group1__link">OpenClassrooms</a></strong> en Aoùt 2023 pour devenir développeuse web. <br/>
            <br/>
            Retrouvez mes projets ci-dessous et n'hésitez pas à me contacter !
            </p>
        
            <a href={cvPDF} target="_blank" class="mh-yellowbtn">
                <span class="mh-yellowbtn__text">Mon CV</span>
            </a>
        </div>
        <div class="about-mh-group2">
            <div class="about-mh-group2-bulle">
                <p class="about-mh-group2-bulle__text">Développement web</p>
                <div class="about-mh-group2-bulle__ligne"><img src={gitLogo} alt="github" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">Github</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={visualstudiocodeLogo} alt="vsc" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">Visual Studio Code</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={html5Logo} alt="html5" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">HTML5</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={css3Logo} alt="css3" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">CSS3</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={sassLogo} alt="Sass" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">Sass / méthode BEM</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={jsLogo} alt="js" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">javaScript</span></div>
            </div>
            <div class="about-mh-group2-bulle">
                <p class="about-mh-group2-bulle__text">Design graphique</p>
                <div class="about-mh-group2-bulle__ligne"><img src={photoShopLogo} alt="photoshop" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">Photoshop</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={illustratorLogo} alt="illustrator" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">Illustrator</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={indesignLogo} alt="indesign" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">InDesign</span></div>
                <div class="about-mh-group2-bulle__ligne"><img src={aftereffectsLogo} alt="after effects" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">After Effects</span></div>        
                <div class="about-mh-group2-bulle__ligne"><img src={figmaLogo} alt="figma" class="about-mh-group2-bulle__img"/><span class="about-mh-group2-bulle__lignetext">Figma</span></div>
            </div>
        </div>
        </section>
        
        <section class="lineblue-mh">
        <div class="lineblue-mh-bulle">
            <img src={creativeImg} alt="icone1-Mathilde-Hetru" class="lineblue-mh-bulle__img"/>
            <h3 class="lineblue-mh-bulle__text">Créative</h3>
        </div>
        <div class="lineblue-mh-bulle">
            <img src={rigoureuseImg} alt="icone2-Mathilde-Hetru" class="lineblue-mh-bulle__img"/>
            <h3 class="lineblue-mh-bulle__text">Rigoureuse</h3>
        </div>
        <div class="lineblue-mh-bulle">
            <img src={autonomeImg} alt="icone3-Mathilde-Hetru" class="lineblue-mh-bulle__img"/>
            <h3 class="lineblue-mh-bulle__text">Autonome</h3>
        </div>
        <div class="lineblue-mh-bulle">
            <img src={impliqueeImg} alt="icone4-Mathilde-Hetru" class="lineblue-mh-bulle__img"/>
            <h3 class="lineblue-mh-bulle__text">Impliquée</h3>
        </div>
        </section>
        
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
    </>
   )
 }
 
 export default Home





