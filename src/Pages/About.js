import developer from "../assets/developer.jpg";
import avater from "../assets/avater.jpg";
import NavBar from "../components/NavBar/NavBar";
import BottomBar from "../components/BottomBar/BottomBar";

function About() {
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
                I'm a junior web developer with a passion for creating engaging
                user experiences and bringing ideas to life through code. With
                two years of experience as both a junior developer and intern,
                I've immersed myself in the world of Fullstack development,
                specializing in web technologies. My journey in web development
                started with a desire to build dynamic and interactive websites
                that captivate users. During my internship and subsequent role
                as a junior developer, I've had the opportunity to work on
                various projects, gaining hands-on experience in frontend and
                backend development. I thrive in the fast-paced environment of
                web development, where creativity and problem-solving skills are
                essential. My toolkit includes languages like JavaScript, HTML,
                and CSS along with frameworks such as React, Vue.js, and
                Nodejs(Nestjs). I'm comfortable working with databases, RESTful
                APIs, and deployment tools, ensuring that every aspect of a web
                application functions seamlessly. As a junior web developer, I
                approach every project with enthusiasm and a commitment to
                delivering high-quality results. Whether it's optimizing website
                performance, implementing new features, or troubleshooting
                issues, I'm dedicated to producing clean, efficient code that
                meets both user needs and business objectives. I'm excited about
                the endless possibilities in web development and eager to
                continue learning and growing in this dynamic field. I look
                forward to contributing my skills to innovative projects and
                making a positive impact in the digital world.
              </p>
            </div>
            <div>
              {" "}
              <img src={avater} alt="img not showing" />
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
            <p>MySql</p>
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
