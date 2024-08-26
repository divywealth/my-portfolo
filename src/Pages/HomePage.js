import computer from "../assets/Computer.jpg";
import developer from "../assets/developer.jpg";
import github from "../assets/github.jpg";
import carashop from "../assets/cara-shop.jpg";
import NavBar from "../components/NavBar/NavBar";
import Slang from "../assets/slang-img.png";
import divy from "../assets/Divy.jpg";
import BottomBar from "../components/BottomBar/BottomBar";
import { useState } from "react";

function HomePage() {
  const projects = [
    {
      title: "CARA SHOP",
      pic: carashop,
      Link: "https://cara-shop-gamma.vercel.app",
      codebaseImg: github,
      codebaseLink: "https://github.com/divywealth/Cara-Shop",
      description:
        "This is a fake E-commerce website where costomers can purchase any wears of their choice",
    },
    {
      title: "SLANG",
      pic: Slang,
      Link: "https://slang-web.vercel.app",
      codebaseImg: github,
      codebaseLink: "https://github.com/divywealth/Slang-web",
      description:
        "Nigeria slangs is widely accepted at the moment most especially slangs used in Afro musics. Different countries are interested in Nigeria slang so this website is for understanding Nigeria slang better and its meaning",
    },
  ];

  
  const text = `I'm a Fullstack Developer with a passion for building robust and user-friendly applications. Over the past two years, I've gained valuable experience working on a variety of projects, from frontend interfaces to backend systems. My journey in software development started with a desire to create seamless and dynamic user experiences, and since then, I've honed my skills in both client-side and server-side technologies.

  Throughout my career, I've worked with a wide range of technologies, including JavaScript/TypeScript, HTML, CSS, and frameworks such as React, Vue.js, and Node.js (NestJs/SailsJs). My expertise extends to database management, RESTful APIs, and deployment tools, ensuring that every component of a web application is well-integrated and performs optimally.
  
  I thrive on problem-solving and am always eager to tackle new challenges. Whether it's developing new features, optimizing performance, or debugging complex issues, I approach every task with enthusiasm and attention to detail. My goal is to deliver high-quality, scalable solutions that not only meet business requirements but also enhance user experiences.
  
  As a Fullstack Developer, I'm excited about the future of web development and am constantly seeking opportunities to learn and grow. I'm looking forward to contributing my skills to innovative projects and making a meaningful impact in the tech industry.`;

  const maxLength = 250;

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const picStyle = {
    borderRadius: '100%'
  }
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <section className="Body">
        <h1>Fullstack Developer</h1>
        <p>Hi, I'm Divine Onuora. Nice to meet you</p>
        <img src={divy} alt="Not displaying" width={"20%"} height={"20%"} style={picStyle} />
        <div className="computerImg">
          <img src={computer} alt="Not displaying" />
        </div>
      </section>

      <section className="oneAbout">
        <h1>About Me.</h1>
        {showAll ? (
          <p id="newWriting">
            {text}{" "}
            <span onClick={toggleShowAll} style={{ color: "grey" }}>
              Collapse
            </span>
          </p>
        ) : (
          <p>
            {text.length > maxLength ? text.slice(0, maxLength) + "..." : text}
            <span onClick={toggleShowAll} style={{ color: "grey" }}>
              Read more
            </span>
          </p>
        )}
      </section>

      <section className="oneService">
        <div className="newService">
          <div>
            <img src={developer} alt="Images not displaying" />
            <h2>Frontend Development(Web)</h2>
            <p className="paragraphGreenColor">Languages I speak</p>
            <span>HTML, CSS, Javascript, ReactJs, VueJs</span>
            <p className="paragraphGreenColor">Dev Tools</p>
            <p>Visual Studio Code</p>
            <p>Bitbucket</p>
            <p>GitHub</p>
            <p>Font Awesome</p>
            <p>UiKit</p>
            <p>AWS(EC2,S3)</p>
          </div>
          <hr />
          <div>
            <img src={developer} alt="Images not displaying" />
            <h2>Backend Development</h2>
            <p className="paragraphGreenColor">Languages I speak</p>
            <span>NodeJs, ExpressJs, SailsJs, NestJs</span>
            <p className="paragraphGreenColor">Dev Tools</p>
            <p>Visual Studio Code</p>
            <p>TypeOrm</p>
            <p>Sequelize</p>
            <p>MySql & Mongodb</p>
            <p>Bitbucket</p>
            <p>GitHub</p>
          </div>
          <hr />
          <div>
            <img src={developer} alt="Images not displaying" />
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
        <div>
          <section className="Projects">
            <h1>PROJECTS</h1>
            <div></div>
            <p>Here you will find my personal projects i created </p>
          </section>

          <section>
            {projects.map((project) => (
              <div>
                <section className="mobileProjectImg">
                  <img src={project.pic} alt="" />
                </section>
                <section className="downSection">
                  <span>{project.title}</span>
                </section>
                <section className="projectDescription">
                  {project.description}
                </section>
                <div className="project-link-image-container">
                  <div className="projectBotton">
                    <button>
                      <a href={project.Link}>VIEW WEBSITE</a>
                    </button>
                  </div>
                  <div>
                    <a href={project.codebaseLink}>
                      <img
                        alt="Not displaying"
                        src={project.codebaseImg}
                        className="github-image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
      <div>
        <BottomBar />
      </div>
    </div>
  );
}

export default HomePage;
