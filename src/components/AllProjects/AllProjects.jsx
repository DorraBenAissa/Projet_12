// IMPORTS
import { Link } from 'react-router-dom'
import './AllProjects.css'
import { useFetch } from '../../useFetch'
import LoadingScreen from '../../components/Loading/index';
import Error from '../../pages/Error/Error';

// Composant CardLocation > Génère des cards avec les images des locations, dynamiquement depuis le fichier JSON
function AllProjects() {
    const allProjects = useFetch(window.location.origin + '/projectDorra.json');

    if (allProjects.isLoading) {
        return <LoadingScreen />
    }

    /* Checking if there is an error and if there is, it will display the Error component. */
    if (allProjects.error) {
        return <Error />
    }

    return (
        <>
            <section className="projects-mh" id="projects">
                <h1 className="projects-mh__title">Portfolio</h1>
                <section className="projects-mh-section">
                    {allProjects.fetchedData.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id} className="projects-mh-section__link_dev-web">
                            <div className="projects-mh-section-card">
                                <span className="projects-mh-section-card__text">{project.title}</span>
                            </div>
                            <div className="projects-mh-section__blue"></div>
                            <img src={project.cover} alt="Mathilde-Hetru-projet" className="projects-mh-section__img" />
                        </Link>
                    ))}
                </section>
            </section>

        </>
    );
}

export default AllProjects;
