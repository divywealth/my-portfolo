




function Project(props) {
    const projects = props.projects
    return(
        <div>
            {projects.map((project) => (
                <div className="projectContainer">
                <section className="projectImageContainer"><img src={project.pic} alt="img not showing"/></section>
                <section className="downSection">{project.title}</section>
                <section className="downWriting">
                    <a href="https://github.com/divywealth"><img src={project.linkImg} alt="img not showing"/></a>
                     
                </section>
            </div>
            ))}
        </div>
    );
}

export default Project;