import avater from '../assets/avater.jpg'
import computer from '../assets/Computer.jpg'
import developer from '../assets/developer.jpg'
import github from '../assets/github.jpg'
import background from '../assets/background.jpeg'
import bitbucket from '../assets/bitbucket.jpeg'


function Body() {
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
        },

    ]
    return (
        <div >
            <section className="Body">
                <h1>Frontend & Backend Developer</h1>
                <p>Hi, I'm Onuora Divine. Nice to meet you</p>
                <img src={avater} alt=""/>
                <div className="computerImg"><img src ={computer} alt=""/></div>
            </section>

            <section className="oneAbout">
            <h1>About Me.</h1>
            <p id="newWriting">I'm Divine based in lagos state. I'm a frontend developer and also a backend developer(Fullstack), I love creating things that are
                live on the internet. My interest in tech started back in 2019 had a lot of time working on HTML, CSS and Javascript and understanding the concept.
                In the years, I’ve cultivated my passion for coding by studying the IT field, but most of all
                have had the opportunity to learn certain Javascript frameworks(VueJs, Reactjs) and also Backend Development and build demo projects.         
                I’m now looking for a junior dev position to finally kick start my career and learn among professionals. 
            </p>
            </section>

            <section className="oneService">
                <div className="newService">
                    <div>
                        <img src={developer} alt="Images not displaying"/>
                        <h2>Frontend Development(Web)</h2>
                        <p className="paragraphGreenColor">Languages I speak</p>
                        <span>HTML, CSS, Javascript, ReactJs, VueJs</span>
                        <p className="paragraphGreenColor">Dev Tools</p>
                        <p>Visual Studio Code</p>
                        <p>Bitbucket</p>
                        <p>GitHub</p>
                        <p>Font Awesome</p>
                        <p>UiKit</p>
                    </div>
                    <hr/>
                    <div>
                        <img src={developer} alt="Images not displaying"/>
                        <h2>Backend Development</h2>
                        <p className="paragraphGreenColor">Languages I speak</p>
                        <span>NodeJs, ExpressJs, SailsJs, NestJs</span>
                        <p className="paragraphGreenColor">Dev Tools</p>
                        <p>Visual Studio Code</p>
                        <p>TypeOrm</p>
                        <p>Sequelize</p>
                        <p>MySql</p>
                        <p>Bitbucket</p>
                        <p>GitHub</p>
                    </div>
                    <hr/>
                    <div>
                        <img src={developer} alt="Images not displaying"/>
                        <h2>Mobile Development</h2>
                        <p className="paragraphGreenColor">Languages I speak</p>
                        <span>Flutter, Dart</span>
                        <p className="paragraphGreenColor">Dev Tools</p>
                        <p>Android Studio</p>
                        <p>Bitbucket</p>
                        <p>GitHub</p>
                    </div>
                </div>
            </section>

            <section className="oneProject">
                <div >
                    <section className="Projects">
                        <h1>PROJECTS</h1>
                        <div></div>
                        <p>Here you will find my personal projects i created </p>
                    </section>

                    <section >
                        
                            {projects.map((project) => (
                                <div>
                                    <section className="mobileProjectImg"><img src={project.pic} alt=""/></section>
                                    <section className="downSection"><span>{project.title}</span></section>
                                    <section className="projectDescription">{project.description}</section>
                                    <div className="projectBotton"><button>VIEW WEBSITE</button></div>
                                </div>
                            ))}
                        
                    </section>
                </div>
            </section>
            
        </div>
    )
}

export default Body;