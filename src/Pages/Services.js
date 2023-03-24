import github from '../assets/github.jpg'
import background from '../assets/background.jpeg'
import bitbucket from '../assets/bitbucket.jpeg'
import Project from "../components/Project";

function Services() {
    const git = github
    const bit = bitbucket
    const backgroundimg = background
    const projects = [
        {
            title: "fhfhffhfh",
            pic: backgroundimg,
            Link: "#",
            linkImg: git
        },

    ]
    return (
        <div className="mainProject">
            <section className="Projects">
                <h1>PROJECTS</h1>
                <div></div>
                <p>Here you will find my personal projects i created </p>
            </section>

            <section >
                
                    <Project projects ={projects}/>
                
            </section>
            
        </div>
    );
}

export default Services;