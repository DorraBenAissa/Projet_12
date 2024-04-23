// IMPORTS
import { Link, NavLink } from 'react-router-dom'
import './header.css'

// ASSETS
import Logo from '../../assets/logo-mathilde-hetru.png'




// Layout Header 
function Header() {
  return (
    //   <nav className='ContHeader'>
    //      <Link to="/">
    //         <img className='HomeLogo' alt='Logo de kasa' src={Logo} />
    //      </Link>

    //      <div>
    //         <NavLink to="/" className='StyledLink'>
    //            Accueil
    //         </NavLink>

    //         <NavLink to="/about" className='StyledLink'>
    //            À Propos
    //         </NavLink>
    //      </div>
    //   </nav>
    <>
      <header class="header-mh" id="home">
      <Link to="/">
        <img src={Logo} class="header-mh__logo" alt="logo-mathilde-hetru" />
      </Link>

        <nav class="header-mh-nav" >
          <a href="#about" class="header-mh-nav__text">Qui suis-je ?</a>
          <a href="#projects" class="header-mh-nav__text">Portfolio</a>

          <Link to="/Services" class="header-mh-nav__text">
            Mes services
          </Link>

          <a href="contact.html" class="header-mh-nav__text">Contact</a>
          <button class="header-mh-nav__link icon" onclick="editNav()" >
            <i class="fa fa-bars"></i>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header