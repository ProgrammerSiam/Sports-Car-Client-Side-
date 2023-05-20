import React from 'react'
import './style/contact.css'
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
 contact <span>us</span>
      </h1>
      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        />
        <form action>
          <h3>get in touch</h3>
          <input type="text" placeholder="your name" className="box" />
          <input type="email" placeholder="your email" className="box" />
          <input type="tel" placeholder="subject" className="box" />
          <textarea
            placeholder="your message"
            className="box"
            cols={30}
            rows={10}
            defaultValue={""}
          />
          <input type="submit" defaultValue="send message" className="button" />
        </form>
      </div>
    </section>
  );
}
git 