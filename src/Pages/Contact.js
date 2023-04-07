import github from '../assets/github.jpg'
import instagram from '../assets/instagram.jpg'
import linkedin from '../assets/linkedin.jpg'
import twitter from '../assets/twitter.jpg'
import bitbucket from '../assets/bitbucket.jpeg'
import avater from '../assets/avater.jpg'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import {useNavigate} from "react-router-dom"
import BottomBar from '../components/BottomBar/BottomBar'
import NavBar from '../components/NavBar'


function Contact() {
    const navigate = useNavigate()
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cbcb9br', 'template_r8q4o9s', form.current, 'IUXdmkclPimh5PcC9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
        navigate("/sent")
    }
    return (
        <div>
            <div><NavBar/></div>
            <div className="contactMain">
                <div className="contact">
                    <div className="contactLeft">
                        <h1 className="contactName">contact.</h1>
                        <p> Get in touch with me via social <br/> media or email</p>
                        <ul>
                            <li><a href="https://twitter.com/Divyblaq"><img src={twitter} alt=""/> </a></li>
                            <li><a href="https://www.instagram.com/divy_blaq/"><img src={instagram} alt=""/> </a></li>
                            <li><a href="https://www.linkedin.com/in/divine-christian-324b97236/"><img src={linkedin} alt=""/> </a></li>
                            <li><a href="https://github.com/divywealth"><img src={github} alt=""/> </a></li>
                            <li><a href="https://bitbucket.org/dashboard/overview"><img src={bitbucket} alt=""/> </a></li>
                        </ul>
                    </div>
                    <div className="contactRight"><img src={avater} alt=""/></div>
                </div>

                <section className="content">
                    <div className="Projects">
                        <h1>CONTACT</h1>
                        <div></div>
                        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                    </div>

                    <div className="contactBox">
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="contact_form_field">
                                <label for="name">Name</label>
                                <input placeholder="Enter your name" type="text" name="user_name" required/>
                            </div>

                            <div className="contact_form_field">
                                <label>Email</label>
                                <input placeholder="Enter your email" type="email"  name="user_email" required></input>
                            </div>

                            <div className="contact_form_field">
                                <label>Subject</label>
                                <input placeholder="Enter Subject" type="text" name="subject" required/>
                            </div>

                            <div className="contact_form_field">
                                <label>Message</label>
                                <textarea placeholder="Enter your message" name="message" required/>
                            </div>

                            <div id="submitContainer">
                                <button type="submit">SUBMIT</button>
                            </div>

                        </form>
                    </div>
                </section>
            </div>
            <div><BottomBar/></div>
        </div>
    );
}

export default Contact;