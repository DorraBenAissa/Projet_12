// IMPORTS
import {Routes, Route} from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Booki from './pages/Booki/Booki';

import Services from './pages/Services/Services';
// import Error from './pages/Error/Error';
// import Location from './pages/Location/Location';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';

// LAYOUTS
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

// COMPONENTS


// GLOBAL STYLES
// import './style/app.css';



// Routes de l'application // Layouts de l'application
function App() {

  return (
    <>
    <div className='container'>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/booki" element={<Booki />} />

      </Routes>
      
      
    </div>
    <Footer />
    </>
  );
}

export default App;
