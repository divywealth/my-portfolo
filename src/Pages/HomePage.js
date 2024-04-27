import avater from "../assets/avater.jpg";
import computer from "../assets/Computer.jpg";
import developer from "../assets/developer.jpg";
import github from "../assets/github.jpg";
import carashop from "../assets/cara-shop.jpg";
import Todolist from "../assets/Todo-List.jpg";
import NavBar from "../components/NavBar/NavBar";
import Slang from "../assets/slang-img.png";
import BottomBar from "../components/BottomBar/BottomBar";

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
    {
      title: "TODO-LIST",
      pic: Todolist,
      Link: "https://divy-todo.netlify.app",
      codebaseImg: github,
      codebaseLink: "https://github.com/divywealth/todo-project",
      description:
        "This is a todo website where the user is to add list of todo's and can be deleted when done",
    },
  ];
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <section className="Body">
        <h1>Frontend & Backend Developer</h1>
        <p>Hi, I'm Onuora Divine. Nice to meet you</p>
        <img src={avater} alt="" />
        <div className="computerImg">
          <img src={computer} alt="" />
        </div>
      </section>

      <section className="oneAbout">
        <h1>About Me.</h1>
        <p id="newWriting">
          I'm a junior web developer with a passion for creating engaging user
          experiences and bringing ideas to life through code. With two years of
          experience as both a junior developer and intern, I've immersed myself
          in the world of Fullstack development, specializing in web
          technologies. My journey in web development started with a desire to
          build dynamic and interactive websites that captivate users. During my
          internship and subsequent role as a junior developer, I've had the
          opportunity to work on various projects, gaining hands-on experience
          in frontend and backend development. I thrive in the fast-paced
          environment of web development, where creativity and problem-solving
          skills are essential. My toolkit includes languages like JavaScript,
          HTML, and CSS along with frameworks such as React, Vue.js, and
          Nodejs(Nestjs). I'm comfortable working with databases, RESTful APIs,
          and deployment tools, ensuring that every aspect of a web application
          functions seamlessly. As a junior web developer, I approach every
          project with enthusiasm and a commitment to delivering high-quality
          results. Whether it's optimizing website performance, implementing new
          features, or troubleshooting issues, I'm dedicated to producing clean,
          efficient code that meets both user needs and business objectives. I'm
          excited about the endless possibilities in web development and eager
          to continue learning and growing in this dynamic field. I look forward
          to contributing my skills to innovative projects and making a positive
          impact in the digital world.
        </p>
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
            <p>MySql</p>
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
