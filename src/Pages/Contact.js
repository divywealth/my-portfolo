import github from '../assets/github.jpg'
import instagram from '../assets/instagram.jpg'
import linkedin from '../assets/linkedin.jpg'
import twitter from '../assets/twitter.jpg'
import bitbucket from '../assets/bitbucket.jpeg'
import facebook from '../assets/facebook.png'
import avater from '../assets/avater.jpg'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('fhdnjhgbd')
        emailjs.sendForm('service_cbcb9br', 'template_r8q4o9s', form.current, 'IUXdmkclPimh5PcC9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    }
    return (
        <div className="contactMain">
            <div className="contact">
                <div className="contactLeft">
                    <h1 className="contactName">contact.</h1>
                    <p> Get in touch with me via social <br/> media or email</p>
                    <ul>
                        <li><a href="https://twitter.com/Divyblaq"><img src={twitter}/> </a></li>
                        <li><a href="https://www.instagram.com/divy_blaq/"><img src={instagram}/> </a></li>
                        <li><a href="#"><img src={facebook}/> </a></li>
                        <li><a href="https://www.linkedin.com/in/divine-christian-324b97236/"><img src={linkedin}/> </a></li>
                        <li><a href="https://github.com/divywealth"><img src={github}/> </a></li>
                        <li><a href="https://bitbucket.org/dashboard/overview"><img src={bitbucket}/> </a></li>
                    </ul>
                </div>
                <div className="contactRight"><img src={avater}/></div>
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
                            <input placeholder="Enter your name" type="text" name="user_name" />
                        </div>

                        <div className="contact_form_field">
                            <label>Email</label>
                            <input placeholder="Enter your email" type="email"  name="user_email"></input>
                        </div>

                        <div className="contact_form_field">
                            <label>Subject</label>
                            <input placeholder="Enter Subject" type="text" name="subject" />
                        </div>

                        <div className="contact_form_field">
                            <label>Message</label>
                            <textarea placeholder="Enter your message" name="message"/>
                        </div>

                        <div id="submitContainer">
                            <button type="submit">SUBMIT</button>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;