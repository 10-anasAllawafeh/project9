import React, { Component } from 'react';
import '../css/main.css';
import { UilPhone } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilMap } from '@iconscout/react-unicons';
import { UilShareAlt } from '@iconscout/react-unicons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Contact extends Component {
    state = {  } 
    render() { 
        return (
        <>

  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact mt-5">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Contact</h2>
                    <p>
                      Need Help? <span>Contact Us</span>
                    </p>
                  </div>
                  <div className="mb-3">
                    <iframe
                      style={{ border: 0, width: "100%", height: 350 }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13538.235891285094!2d35.889223332120636!3d31.972859349554362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca06b4f0fa949%3A0x767658b1f5642bb5!2sAsh%20Shumaysani%2C%20Amman!5e0!3m2!1sen!2sjo!4v1659106202567!5m2!1sen!2sjo"
                      frameBorder={0}
                      allowFullScreen=""
                    />
                  </div>
                  {/* End Google Maps */}
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="info-item  d-flex align-items-center">
                        <UilMap className="icon" />
                        <div>
                          <h3>Our Address</h3>
                          <p>Ash Shumaysani</p>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                      <div className="info-item d-flex align-items-center">
                        <UilEnvelope className="icon" />
                        <div>
                          <h3>Email Us</h3>
                          <p>contact@example.com</p>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                      <div className="info-item  d-flex align-items-center">
                        <UilPhone className="icon" />
                        <div>
                          <h3>Call Us</h3>
                          <p>+1 5589 55488 55</p>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                      <div className="info-item  d-flex align-items-center">
                        <UilShareAlt className="icon" />
                        <div>
                          <h3>Opening Hours</h3>
                          <div>
                            <strong>Mon-Sat:</strong> 11AM - 23PM;
                            <strong>Sunday:</strong> Closed
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                  </div>
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form p-3 p-md-4"
                  >
                    <div className="row">
                      <div className="col-xl-6 form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="col-xl-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                  {/*End Contact Form */}
                </div>
              </section>
              {/* End Contact Section */}
</>
)
}
}

export default Contact;