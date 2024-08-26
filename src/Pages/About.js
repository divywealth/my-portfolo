import developer from "../assets/developer.jpg";
import divy from "../assets/Divy.jpg";
import NavBar from "../components/NavBar/NavBar";
import BottomBar from "../components/BottomBar/BottomBar";

function About() {
  const picStyle = {
    borderRadius: "100%",
    height: "80%",
    width: "80%",
  }
  const picContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="About">
        <section>
          <h1>About Me.</h1>
          <div className="aboutSpliting">
            <div>
              <p className="aboutContent">
                I'm a Fullstack Developer with a passion for building robust and
                user-friendly web applications. Over the past two years, I've
                gained valuable experience working on a variety of projects,
                from frontend interfaces to backend systems. My journey in web
                development started with a desire to create seamless and dynamic
                user experiences, and since then, I've honed my skills in both
                client-side and server-side technologies. Throughout my career,
                I've worked with a wide range of technologies, including
                JavaScript, HTML, CSS, and frameworks such as React, Vue.js, and
                Node.js (NestJS). My expertise extends to database management,
                RESTful APIs, and deployment tools, ensuring that every
                component of a web application is well-integrated and performs
                optimally. I thrive on problem-solving and am always eager to
                tackle new challenges. Whether it's developing new features,
                optimizing performance, or debugging complex issues, I approach
                every task with enthusiasm and attention to detail. My goal is
                to deliver high-quality, scalable solutions that not only meet
                business requirements but also enhance user experiences. As a
                Fullstack Developer, I'm excited about the future of web
                development and am constantly seeking opportunities to learn and
                grow. I'm looking forward to contributing my skills to
                innovative projects and making a meaningful impact in the tech
                industry.
              </p>
            </div>
            <div style={picContainer}>
              {" "}
              <img src={divy} alt="img not showing" style={picStyle} />
            </div>
          </div>
        </section>
        <div className="Service">
          <div className="firstService">
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
            <p>AWS(EC2, S3)</p>
          </div>
          <div className="secondService">
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
          <div className="LastService">
            <img src={developer} alt="Images not displaying" />
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
      <div>
        <BottomBar />
      </div>
    </div>
  );
}

export default About;
