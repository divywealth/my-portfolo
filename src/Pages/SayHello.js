import { ValidationError, useForm } from "@formspree/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SayHello() {
  const form = useRef();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xanwbbyk");
  if (state.succeeded) {
    form.current.reset();
    navigate("/sent");
  }
  // const handleSubmit = (e) => {
  //     e.preventDefault()

  //     form.current.reset()
  //     navigate("/sent")
  // }
  return (
    <div>
      <section className="content">
        <div className="Projects">
          <h1>CONTACT</h1>
          <div></div>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>

        <div className="contactBox">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="contact_form_field">
              <label for="name">Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                name="user_name"
                required
              />
            </div>

            <div className="contact_form_field">
              <label>Email</label>
              <input
                placeholder="Enter your email"
                type="email"
                name="user_email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="contact_form_field">
              <label>Subject</label>
              <input
                placeholder="Enter Subject"
                type="text"
                name="subject"
                required
              />
            </div>

            <div className="contact_form_field">
              <label>Message</label>
              <textarea
                placeholder="Enter your message"
                type="message"
                name="message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div id="submitContainer">
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? (
                  <span>
                    <div className="spinner"></div>
                  </span>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SayHello;
