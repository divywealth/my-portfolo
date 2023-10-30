import { Link } from 'react-router-dom'
import './Sent.css'
function Sent() {
    return (
        <div className="sentComponent">
            <div><img src="https://res.cloudinary.com/de9ktuoh1/image/upload/v1698679641/hawta6yfumfprveldaoq.png" alt="Not showing"/></div>
            <div className="sentComponentName"></div>
            <div className="sentComponentMessageOne"><h1>Message Sent.</h1></div>
            <div className="sentComponentMessageThanks"><h1>Thanks!</h1></div>
            <div className="sentComponentMessageTwo"><p>I'll be in touch with you shortly</p></div>
            <div className="sentComponentMessageButton"><Link to="/"><button>Go back to home</button></Link></div>
        </div>
    )   
}

export default Sent