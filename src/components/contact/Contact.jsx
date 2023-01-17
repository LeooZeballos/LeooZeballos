import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  const contactOptions = [
    {
      icon: AiOutlineMail,
      title: "Email",
      content: "zeballosleonel3@gmail.com",
      link: "mailto:zeballosleonel3@gmail.com",
    },
    {
      icon: BsLinkedin,
      title: "Linkedin",
      content: "Leonel Ayrton Zeballos",
      link: "https://www.linkedin.com/in/leonelayrtonzeballos/",
    },
    {
      icon: BsWhatsapp,
      title: "Whatsapp",
      content: "+54 9 353 417-1360",
      link: "https://wa.me/543534171360",
    },
  ];

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map((option, index) => (
            <article className="contact__option" key={index}>
              <option.icon className="contact__icon" />
              <h4>{option.title}</h4>
              <h5>{option.content}</h5>
              <a href={option.link} target="_blank" rel="noreferrer">Send a Message</a>
            </article>
          ))}
        </div>
        <form action="">
          <input type="text" placeholder="Your name..." required />
          <input type="email" placeholder="Your email..." required />
          <input type="subject" placeholder="Subject..." required />
          <textarea name="message" rows="7" placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
