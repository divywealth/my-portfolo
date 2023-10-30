import github from '../assets/github.jpg';
import Project from "../components/Project";
import NavBar from '../components/NavBar/NavBar';
import BottomBar from '../components/BottomBar/BottomBar';
import carashop from '../assets/cara-shop.jpg';
import Todolist from '../assets/Todo-List.jpg';
import Slang from '../assets/slang-img.png';

function Services() {
    const projects = [
        {
            title: "CARA-SHOP",
            pic: carashop,
            Link: "https://cara-shop-gamma.vercel.app",
            codebaseImg: github,
            codebaseLink: "https://github.com/divywealth/Cara-Shop",
            description: "This is an E-commerce website where costomers can purchase any wears of their choice"
        },
        {
            title: "SLANG",
            pic: Slang,
            Link: "https://slang-web.vercel.app", 
            codebaseImg: github,
            codebaseLink: "https://github.com/divywealth/Slang-web",
            description: "Nigeria slangs is widely accepted at the moment most especially slangs used in Afro musics. Different countries are interested in Nigeria slang so this website is for understanding Nigeria slang better and its meaning"
        },
        {
            title: "TODO-LIST",
            pic: Todolist,
            Link: "https://divy-todo.netlify.app", 
            codebaseImg: github,
            codebaseLink: "https://github.com/divywealth/todo-project",
            description: "This is a todo website where the user is to add list of todo's and can be deleted when done"
        },
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