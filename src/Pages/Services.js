import github from '../assets/github.jpg';
import Project from "../components/Project";
import NavBar from '../components/NavBar/NavBar';
import BottomBar from '../components/BottomBar/BottomBar';
import carashop from '../assets/cara-shop.jpg';
import Slang from '../assets/slang-img.png';
import Property from '../assets/Property.png';
import MyPal from '../assets/mypal.png';


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
            title: "PROPERTY-PROSPECT",
            pic: Property,
            Link: "https://property-prospect-hq.vercel.app/",
            codebaseImg: github,
            codebaseLink: "https://github.com/divywealth/Propertyprospct-be",
            description: "Built the backend service for a real estate platform that allows users to search for properties, view details, and contact agents. The service includes features such as property listings, user authentication, and search functionality."
        },
        {
            title: "Mypal",
            pic: MyPal,
            Link: "https://mypal-business-admin.onrender.com/",
            codebaseImg: github,
            codebaseLink: "",
            description: "Built the backend service for a business management platform that allows users to manage their business operations, including customer management, sales tracking, and reporting. The service includes features such as user authentication, data storage, and analytics."
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