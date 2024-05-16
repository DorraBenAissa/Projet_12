// IMPORTS
import { useParams } from 'react-router-dom';
import './Project.css';
import { useFetch } from '../../useFetch';
import { Link } from 'react-router-dom'

// COMPONENTS
import LoadingScreen from '../../components/Loading/index';
import Error from '../../pages/Error/Error';
// import Slider from '../../components/Slider/Slider';
// import Rating from '../../components/Rating/Rating';
// import Collapses from '../../components/Collapse/Collapse';

// Page Logement > Contient le Composant Slider, compo Rating et le composant Collapsedescription ainsi que les infos du logement et du propriétaire
function Logement() {
    const DataLocation = useFetch(window.location.origin + '/projectDorra.json');

    const { id } = useParams(); // Récupère l'id du logement dans l'url

    let datas;
    if (DataLocation.fetchedData) {
        datas = DataLocation.fetchedData.find(location => location.id === id);
    }

    /* Checking if the data is loading and if it is, it will display a loading screen. */
    if (DataLocation.isLoading) {
        return <LoadingScreen />
    }

    /* Checking if there is an error and if there is, it will display the Error component. */
    if (DataLocation.error) {
        return <Error />
    }

    if (!datas) { // Si l'id n'existe pas, affiche la page d'erreur
        return (<Error />);
    }

    // Crréer un JSON pour le passer en props au composant Collapse
    let data;
    data = [
        {
            title: 'Description',
            text: [datas.description]
        },
        {
            title: 'Equipements',
            //Créer une liste avec les équipements
            text: datas.equipments
            // .map(equipment => (
            //    <li className='TextCollapse' key={equipment}>{equipment}</li>
            // ))
        }
    ]

    return (
        <>
            {/* {datas.pictures && <Slider images={datas.pictures} />} */}

            {/* <section className='ContInfo'>

            <div className='ContInfoLogement'>
               <h1 className='TittleInfo'>{datas.title}</h1>
               <p className='TextInfo'>{datas.location}</p>
               <ul className='TagUl'>
                  {datas.tags && datas.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>

            <div className='ContInfoOwner'>
               <div className='TEST'>
                  <p className='TextInfoOwner'>{datas.host.name}</p>
                  <img className='ImgOwner' src={datas.host.picture} alt={datas.host.name} />
               </div> */}

            {/* <Rating rating={datas.rating} /> */}
            {/* </div> */}

            {/* </section> */}

            {/* <Collapses data={data}/> */}

            <section class="presentation-projet">
                <div class="presentation-projet-btns">
                    <div class="presentation-projet-card">
                        <span class="presentation-projet-card__text">{datas.title}</span>
                    </div>
                    <div class="presentation-projet-back">
                        <Link Link to="/portfolio" class="presentation-projet-back__link">
                            <img src="/assets/competence-mathilde-hetru_arrow.png" alt="icone1-Mathilde-Hetru" class="presentation-projet-back__arrow" />
                            <span class="presentation-projet-back__text">Retour au portfolio</span>
                        </Link>
                    </div>
                </div>
                <div class="presentation-projet-logs">
                
                    {datas.envTech && datas.envTech.map(tag => (
                        <div class="presentation-projet-yellowbtn">
                            <span class="presentation-projet-yellowbtn__text">{tag}</span>
                        </div>
                    ))}
                </div>

                <h3 class="presentation-projet-text">
                    {datas.description}
                </h3>
                <a href={datas.lienSiteHeberger} target="_blank" class="presentation-projet__link">
                    <img src="/assets/link-earth-mathilde-hetru.png" alt="link-Mathilde-Hetru" class="presentation-projet__earth" />
                </a>
            </section>

            <section class="image-projet-nogrid">
                <a href={datas.lienSiteHeberger} target="_blank" class="presentation-projet__link">
                    <img src={datas.cover} class="image-projet__img" alt="reservia-Mathilde-hetru"/>
                </a>
            </section>

        </>
    );
}


export default Logement;