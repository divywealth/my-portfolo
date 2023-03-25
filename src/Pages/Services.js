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
            title: "TODO WEBSITE",
            pic: backgroundimg,
            Link: "#", 
            linkImg: git,
            description: "This is a todo website where the user is to add list of todo's and can be deleted when done"
        },
        {
            title: "fhfhffhfh",
            pic: backgroundimg,
            Link: "#", 
            linkImg: bit,
            description: "This is a todo website where the user is to add list of todo's and can be deleted when done"
        }

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