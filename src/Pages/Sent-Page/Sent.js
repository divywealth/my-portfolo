import { Link } from 'react-router-dom'
import './Sent.css'
function Sent() {
    return (
        <div className="sentComponent">
            <div><img src="https://frsc-bucket.s3.eu-west-1.amazonaws.com/Done.jpg" alt="Not showing"/></div>
            <div className="sentComponentName"></div>
            <div className="sentComponentMessageOne"><h1>Message Sent.</h1></div>
            <div className="sentComponentMessageThanks"><h1>Thanks!</h1></div>
            <div className="sentComponentMessageTwo"><p>I'll be in touch with you shortly</p></div>
            <div className="sentComponentMessageButton"><Link to="/"><button>Go back to home</button></Link></div>
        </div>
    )   
}

export default Sent