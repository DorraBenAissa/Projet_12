// IMPORTS
import './home.css'

// ASSETS
// import Banner from '../../components/Banner/Banner'
// import BannerImageHome from '../../assets/banner-home.png';
import MathildeHetru2 from '../../assets/undraw_software_engineer_lvl6.svg'
import bulleBleueMathildeHetru from '../../assets/bulle-bleue-mathilde-hetru.png'
import cvPDF from '../../assets/CV_Dorra Ben Aissa.pdf'
import sixSensLogo from '../../assets/mathilde-hetru-_boulanger.png'
import pharmalysLogo from '../../assets/photo.svg'
import reactLogo from '../../assets/reactLogo.png'


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
    import AllProjects from '../../components/AllProjects/AllProjects'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   return (
    <>
        <div className="banniere-mh">
            <img src={MathildeHetru2} alt="Toon-me-Mathilde-Hetru" className="banniere-mh__toonme"/>
            
            <div className="banniere-mh-group">
                <h1 className="banniere-mh-group__title">Dorra Ben Aissa</h1>
                <h2 className="banniere-mh-group__soustitle">Développeuse web _ React / Graphiste </h2>
                <p className="banniere-mh-group__text">Basée à Paris et à mon compte depuis 2023, j'ai entrepris une formation dans le développement web React avec OpenclassNamerooms en Août 2023 pour ajouter une corde à mon arc.
                <br/>
N'hésitez donc pas à parcourir mon portfolio et à m'envoyer un mail ! 
                </p> 
            
                <a href="#about" className="mh-yellowbtn">
                    <span className="mh-yellowbtn__text">Qui suis-je ?</span>
                </a>
            </div>
            
            <img src={bulleBleueMathildeHetru} alt="bulle-bleue-Mathilde-Hetru" className="banniere-mh__bulle-bleue"/>
        </div>
        
        <section className="about-mh" id="about">
        <div className="about-mh-group1">
            <h1 className="about-mh-group1__title">Qui suis-je ?</h1> 
            <p className="about-mh-group1__text">Formée pour être Designer, j'ai obtenu mon premier job en tant que Graphiste en 2011 chez GDC.<br/><br/>
            
            En 2012, après plusieurs mois de salariat, j'ai pris mon envol et j'ai obtenu mon deuxième job en tant que Graphiste chez 'sixieme sens agency' <br/>
            J'ai eu le privilège d'accompagner de grandes marques comme <strong><a href="https://www.novartis.com/fr-fr/"  className="about-mh-group1__link">novartis</a></strong> ou <strong><a href="https://www.abbvie.ca/fr/our-company/about-abbvie.html"  className="about-mh-group1__link">abbVie </a></strong> ou <strong><a href="https://www.boehringer-ingelheim.com/fr"  className="about-mh-group1__link"> Boehringer Ingelheim </a></strong> dans leurs projets.<br/>
            <br/>
            En 2015, j'ai travaillé comme graphiste chez <strong><a href="https://pharmalys.ch/fr" className="about-mh-group1__link">Pharmalys Laboratories Switzerland</a></strong>. Le Laboratoire Pharmalys est une société suisse spécialisée dans la nutrition infantile à travers la fabrication, la distribution et la promotion de préparations pour nourrissons et d'aliments pour bébés haut de gamme dans plus de 50 pays à travers le monde. <br/><br/>          
            J'ai eu le plaisir de travailler avec des <strong><a href="i-dont-think-i-feel.html"  className="about-mh-group1__link">indépendants</a></strong>, des <strong><a href="esprit-do.html"  className="about-mh-group1__link">petits commerces</a></strong> et des <strong><a href="portraits.html"  className="about-mh-group1__link">particuliers</a></strong> et de pouvoir répondre à tous leurs besoins grâce à ma double casquette. <br/>
            <br/>
            Aujourd'hui, je suis retournée à premiers amours : l'informatique et le développement web. <br/>
            J'ai entrepris une formation diplomante avec <strong><a href="https://openclassNamerooms.com/fr/paths/556-developpeur-web" className="about-mh-group1__link">Openclassrooms</a></strong> en Aoùt 2023 pour devenir développeuse web. <br/>
            <br/>
            Retrouvez mes projets ci-dessous et n'hésitez pas à me contacter !
            </p>
        
            <a href={cvPDF} target="_blank" className="mh-yellowbtn">
                <span className="mh-yellowbtn__text">Mon CV</span>
            </a>
        </div>
        <div className="about-mh-group2">
            <div className="about-mh-group2-bulle">
                <p className="about-mh-group2-bulle__text">Développement web</p>
                <div className="about-mh-group2-bulle__ligne"><img src={reactLogo} alt="React" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">React</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={gitLogo} alt="github" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">Github</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={visualstudiocodeLogo} alt="vsc" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">Visual Studio Code</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={html5Logo} alt="html5" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">HTML5</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={css3Logo} alt="css3" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">CSS3</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={sassLogo} alt="Sass" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">Sass / méthode BEM</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={jsLogo} alt="js" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">javaScript</span></div>
            </div>
            <div className="about-mh-group2-bulle">
                <p className="about-mh-group2-bulle__text">Design graphique</p>
                <div className="about-mh-group2-bulle__ligne"><img src={photoShopLogo} alt="photoshop" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">Photoshop</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={illustratorLogo} alt="illustrator" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">Illustrator</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={indesignLogo} alt="indesign" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">InDesign</span></div>
                <div className="about-mh-group2-bulle__ligne"><img src={aftereffectsLogo} alt="after effects" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">After Effects</span></div>        
                <div className="about-mh-group2-bulle__ligne"><img src={figmaLogo} alt="figma" className="about-mh-group2-bulle__img"/><span className="about-mh-group2-bulle__lignetext">Figma</span></div>
            </div>
        </div>
        </section>
        
        <section className="lineblue-mh">
        <div className="lineblue-mh-bulle">
            <img src={creativeImg} alt="icone1-Mathilde-Hetru" className="lineblue-mh-bulle__img"/>
            <h3 className="lineblue-mh-bulle__text">Créative</h3>
        </div>
        <div className="lineblue-mh-bulle">
            <img src={rigoureuseImg} alt="icone2-Mathilde-Hetru" className="lineblue-mh-bulle__img"/>
            <h3 className="lineblue-mh-bulle__text">Rigoureuse</h3>
        </div>
        <div className="lineblue-mh-bulle">
            <img src={autonomeImg} alt="icone3-Mathilde-Hetru" className="lineblue-mh-bulle__img"/>
            <h3 className="lineblue-mh-bulle__text">Autonome</h3>
        </div>
        <div className="lineblue-mh-bulle">
            <img src={impliqueeImg} alt="icone4-Mathilde-Hetru" className="lineblue-mh-bulle__img"/>
            <h3 className="lineblue-mh-bulle__text">Impliquée</h3>
        </div>
        </section>

        {/* Début section les projets */}
        <AllProjects />
        {/* Fin section les projets */}
        
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
    </>
   )
 }
 
 export default Home





