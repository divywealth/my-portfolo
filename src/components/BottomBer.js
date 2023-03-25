import github from '../assets/github.jpg'
import instagram from '../assets/instagram.jpg'
import linkedin from '../assets/linkedin.jpg'
import twitter from '../assets/twitter.jpg'
import bitbucket from '../assets/bitbucket.jpeg'


function BottomBar() {
    return (
        <div className="mainBottomBar">
            <section className="signInSection">
                <div className="signInSectionHeader"> <h1>Start a project</h1></div>
                <div className="signInSectionDiscription">Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</div>
                <div className="signInSectionButton"> <button>Let's Do This</button></div>
            </section>

            <div className="BottomBar">
                <div className="leftBottomBar">
                    <h2>ONUORA DIVINE</h2>
                    <p>A Frontend/Backend focused Web Developer & Mobile Developer building the Frontend and Backend of Websites and Mobile Applications that leads to the success of the overall product</p>
                </div>
                <div className="rightBottomBar">
                    <h2>SOCIAL</h2>
                    <a href="https://github.com/divywealth"><img src={github} alt=""/></a>
                    <a href="https://bitbucket.org/dashboard/overview"><img src={bitbucket} alt=""/></a>
                    <a href="https://twitter.com/Divyblaq"><img src={twitter} alt=""/></a>
                    <a href="https://www.instagram.com/divy_blaq/"><img src={instagram} alt=""/></a>
                    <a href="https://www.linkedin.com/in/divine-christian-324b97236/"><img src={linkedin} alt=""/></a>
                </div>
            </div>
            <hr/>
            <section className="lastBottomBar"><p>©Copyright 2023. Made by Onuora Divine</p></section>
        </div>
    );
}

export default BottomBar;