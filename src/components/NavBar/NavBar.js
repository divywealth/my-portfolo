import logo from '../../assets/my-d-logo.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import './NavBar.css'
function NavBar() {

    const [showMenu, setShowMenu] = useState(true)
    const [showCancel, setShowCancel] = useState(false)

    const handleShowIcon = () => {
        
        setShowCancel(!showCancel)
        setShowMenu(!showMenu)
    }
    return (
        <div>
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
                    {showMenu && <FontAwesomeIcon icon={faBars} onClick={handleShowIcon} size="lg"/>}
                    {showCancel && <FontAwesomeIcon icon={faXmark} onClick={handleShowIcon} size="lg"/>}
                    
                </div>
            </div>

            { showCancel &&<div className="menuBar">
                <a href="https://frsc-bucket.s3.eu-west-1.amazonaws.com/ONUORA+DIVINE+LATEST+1.pdf" className="menuBarLink">My Resume</a>
                <Link to="/sayHello" className="sayHello"><button>Say Hello</button></Link>
            </div>}
        </div>
    );
}

export default NavBar;