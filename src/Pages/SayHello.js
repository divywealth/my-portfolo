
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


function SayHello() {
    const form = useRef()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_cbcb9br', 'template_r8q4o9s', form.current, 'IUXdmkclPimh5PcC9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    }
    return (
        <div>
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
                            <input placeholder="Enter your name" type="text" name="user_name"/>
                        </div>

                        <div className="contact_form_field">
                            <label>Email</label>
                            <input placeholder="Enter your email"  type="email" name="user_email"/>
                        </div>

                        <div className="contact_form_field">
                            <label>Subject</label>
                            <input placeholder="Enter Subject" type="text" name="subject"/>
                        </div>

                        <div className="contact_form_field">
                            <label>Message</label>
                            <textarea placeholder="Enter your message" type="message" name="message"/>
                        </div>

                        <div id="submitContainer">
                            <button>SUBMIT</button>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    );
}

export default SayHello;