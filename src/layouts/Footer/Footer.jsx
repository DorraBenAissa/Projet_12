// IMPORTS
import { Link } from 'react-router-dom'
import './footer.css'

// ASSETS
import LogoFooter from '../../assets/logo-blanc-mathilde-hetru.png'
import imgLinkedIn from '../../assets/lien-mathilde-hetru_linkedin.png'
import imgGit from '../../assets/lien-mathilde-hetru_github.png'


// Layout Footer
function Footer() {
    return (
        //   <footer className='ContFooter'>
        //      <Link to="/">
        //         <img src={LogoFooter} alt='Logo de Kasa'/>
        //      </Link>

        //      <p className='FooterText'>© 2024 Kasa. All rights reserved</p>
        //   </footer>
        <>
            <footer class="footer-mh" id="contact">
                <div class="footer-mh-panels">
                    <div class="footer-mh-panels-pres">
                        <Link to="/">
                            <img src={LogoFooter} class="footer-mh-panels-pres__logo" alt="logo-mathilde-hetru" />
                        </Link>
                        <p class="footer-mh-panels-pres__text">Développeuse web <br/> React <br/> Graphiste</p>
                        <a href="mailto:hello@mathildehetru.com" class="footer-mh-panels-pres__linkmail">
                            <p class="footer-mh-panels-pres__mail">dorra.benaissaghariani@gmail.com</p>
                        </a>
                    </div>

                    <div class="footer-mh-panels-RS">
                        <a href="https://www.linkedin.com/in/dorra-ben-aissa-%E2%9C%A8-76683063/" target="_blank" class="footer-mh-panels-RS__link">
                            <img src={imgLinkedIn} class="footer-mh-panels-RS__img" alt="linkedin-mathilde-hetru" />
                        </a>
                        <a href="https://github.com/DorraBenAissa" target="_blank"  class="footer-mh-panels-RS__link">
                            <img src={imgGit} class="footer-mh-panels-RS__img" alt="github-mathilde-hetru" />
                        </a>
                        {/* <a href="https://www.instagram.com/dorra.benaissaghariani/" target="_blank"  class="footer-mh-panels-RS__link">
                            <img src="img/lien-mathilde-hetru_instagram.png" class="footer-mh-panels-RS__img" alt="instagram-mathilde-hetru" />
                        </a>
                        <a href="https://twitter.com/dorra.benaissa" target="_blank"  class="footer-mh-panels-RS__link">
                            <img src="img/lien-mathilde-hetru_twitter.png" class="footer-mh-panels-RS__img" alt="twitter-mathilde-hetru" />
                        </a>
                        <a href="https://www.pinterest.fr/dorrabenaissaghariani/" target="_blank"  class="footer-mh-panels-RS__link">
                            <img src="img/lien-mathilde-hetru_pinterest.png" class="footer-mh-panels-RS__img" alt="pinterest-mathilde-hetru" />
                        </a> */}
                    </div>

                    <nav class="footer-mh-panels-nav">
                        <a href="/#home" class="footer-mh-panels-nav__link">Accueil</a>
                        <a href="index.html#about" class="footer-mh-panels-nav__link">Qui suis-je ?</a>
                        <a href="index.html#projects" class="footer-mh-panels-nav__link">Portfolio</a>
                        <a href="mes-services.html" class="footer-mh-panels-nav__link">Mes services</a>
                        <a href="portraits-personnalises.html" class="footer-mh-panels-nav__link">Contact</a>
                    </nav>
                </div>
                <p class="footer-mh-sentence">©2024 Dorra Ben Aissa | Les images de ce site ne sont pas libres de droits | Site développé from scratch par moi-même avec passion, cernes et caféine | <a href="conditions-generales-de-vente.html" class="footer-mh-sentence-lien">Conditions générales de vente</a> | <a href="mentions-legales.html" class="footer-mh-sentence-lien">Mentions légales</a></p>
            </footer>
        </>
   )
}

export default Footer