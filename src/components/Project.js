import background from '../assets/background.jpeg'
import github from '../assets/github.jpg'


import bitbucket from '../assets/bitbucket.jpeg'

function Project(props) {
    const projects = props.projects
    return(
        <div>
            {projects.map((project) => (
                <div className="projectContainer">
                <section className="projectImageContainer"><img src={project.pic}/></section>
                <section className="downSection">{project.title}</section>
                <section className="downWriting">
                    <a><img src={project.linkImg} alt="img not showing"/></a>
                    <a></a> 
                </section>
            </div>
            ))}
        </div>
    );
}

export default Project;