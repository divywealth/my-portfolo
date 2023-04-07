




function Project(props) {
    const projects = props.projects
    return(
        <div>
            {projects.map((project) => (
                <div>
                    <div className="projectContainer">
                    <section className="projectImageContainer"><img src={project.pic} alt="img not showing"/></section>
                    <section className="downSection"><span>{project.title}</span></section>
                    </div>
                    <div className="projectDescription">{project.description}</div>
                    <div className="projectBotton"><button><a href={project.Link}>VIEW WEBSITE</a></button></div>
                </div>
            ))}
        </div>
    );
}

export default Project;