import { useState } from "react";


function SayHello() {
    const [name, setName] = useState()
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
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
                    <form onSubmit={handleSubmit}>
                        <div className="contact_form_field">
                            <label for="name">Name</label>
                            <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="contact_form_field">
                            <label>Email</label>
                            <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>

                        <div className="contact_form_field">
                            <label>Message</label>
                            <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}/>
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