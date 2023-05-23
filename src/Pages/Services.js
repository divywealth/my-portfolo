import github from '../assets/github.jpg'
import bitbucket from '../assets/bitbucket.jpeg'
import Project from "../components/Project";
import NavBar from '../components/NavBar/NavBar';
import BottomBar from '../components/BottomBar/BottomBar';
import carashop from '../assets/cara-shop.jpg'
import Todolist from '../assets/Todo-List.jpg'

function Services() {
    const git = github
    const bit = bitbucket
    const projects = [
        {
            title: "CARA-SHOP",
            pic: carashop,
            Link: "http://cara-shop.herokuapp.com/",
            linkImg: git,
            description: "This is an E-commerce website where costomers can purchase any wears of their choice"
        },
        {
            title: "TODO-LIST",
            pic: Todolist,
            Link: "https://divy-todo.netlify.app", 
            linkImg: bit,
            description: "This is a todo website where the user is to add list of todo's and can be deleted when done"
        }

    ]
    return (
        <div>
            <div><NavBar/></div>
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
            <div><BottomBar/></div>
        </div>
    );
}

export default Services;