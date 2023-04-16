import logo from '../assets/my-d-logo.jpg'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="Nav">
            <div className="NavLeftSide">
                <img src={logo} alt=""/>
            </div>
            <div className="NavRightSide">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/services"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <a href="https://frsc-bucket.s3.eu-west-1.amazonaws.com/ONUORA+DIVINE+LATEST+1.pdf"><li>My Resume</li></a>
                </ul>
            </div>
            <div className="NavLastSide">
                <Link to="/sayHello"><button>Say Hello</button></Link>
            </div>
        </div>
    );
}

export default NavBar;