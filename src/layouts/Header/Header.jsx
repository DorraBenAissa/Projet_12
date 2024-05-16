// IMPORTS
import { Link, NavLink } from 'react-router-dom'
import './header.css'

// ASSETS
import Logo from '../../assets/logo-mathilde-hetru.png'




// Layout Header 
function Header() {

  function editNav() {
    var x = document.getElementById("home");
    if (x.className === "header-mh") {
    x.className += " responsive";
    } else {
    x.className = "header-mh";
    }
  }

  return (
    <>
      <header className="header-mh" id="home">
      <Link to="/">
        <img src={Logo} className="header-mh__logo" alt="logo-mathilde-hetru" />
      </Link>

        <nav className="header-mh-nav" >

          {/* <a href="#about" className="header-mh-nav__text"> */}
          <Link to="/about" className="header-mh-nav__text">
            Qui suis-je ?
          </Link>

          <Link to="/portfolio" className="header-mh-nav__text">
            Portfolio
          </Link>

          <Link to="/Services" className="header-mh-nav__text">
            Mes services
          </Link>

          {/* <a href="contact.html" className="header-mh-nav__text"> */}
          <Link to="/contact" className="header-mh-nav__text">
            Contact
          </Link>
            {/* </a> */}

          <button className="header-mh-nav__link icon" onClick={editNav} >
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header