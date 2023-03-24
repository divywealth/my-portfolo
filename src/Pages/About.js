import developer from '../assets/developer.jpg'
import avater from '../assets/avater.jpg'

function About() {
    return (
        <div className="About"> 
           <section>
                <h1>About Me.</h1>
                <div className="aboutSpliting">
                    <div> 
                        <p className="aboutContent">I'm Divine based in lagos state. I'm a frontend developer and also a backend developer(Fullstack), I love creating things that are
                            live on the internet. My interest in tech started back in 2019 had a lot of time working on HTML, CSS and Javascript and understanding the concept.
                            In the years, I’ve cultivated my passion for coding by studying the IT field, but most of all
                            have had the opportunity to learn certain Javascript frameworks(VueJs, Reactjs) and also Backend Development and build demo projects.
                            
                            I’m now looking for a junior dev position to finally kick start my career and learn among professionals. 

                        </p>
                    </div>
                    <div> <img src={avater} alt="img not showing"/></div>
                </div>
           </section>
           <div className="Service">
                <div className= "firstService">
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
                <div className= "secondService">
                    <img src={developer} alt="Images not displaying"/>
                    <h2>Backend Development</h2>
                    <p className= "paragraphGreenColor">Languages I speak</p>
                    <span>NodeJs, ExpressJs, SailsJs, NestJs</span>
                    <p className="paragraphGreenColor">Dev Tools</p>
                    <p>Visual Studio Code</p>
                    <p>TypeOrm</p>
                    <p>Sequelize</p>
                    <p>MySql</p>
                    <p>Bitbucket</p>
                    <p>GitHub</p>
                </div>
                <div className= "LastService">
                    <img src={developer} alt="Images not displaying"/>
                    <h2>Mobile Development</h2>
                    <p className="paragraphGreenColor">Languages I speak</p>
                    <span>Flutter, Dart</span>
                    <p className="paragraphGreenColor">Dev Tools</p>
                    <p className="paragraphBlackColor">Android Studio</p>
                    <p>Bitbucket</p>
                    <p>GitHub</p>
                </div>
            </div>
                 
        </div>
    );
}

export default About;