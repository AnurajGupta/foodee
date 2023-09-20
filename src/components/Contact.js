import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> Us
        </h1>
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?
pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.
8480109!3d41.2802068!3m2!111024!21768!4f13.
1!3m3!1m2!1s0×0%3A0×36c6fa619c4f5603!2sMcDonal
I d&#39;
s!5e0!3m2!1sen!2s!4V1633364807635!5m2!1sen!25"
            className="map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <form>
            <h3>Get In Touch</h3>
            <div className="inputBox">
              <span>
                <FaUserAlt />
              </span>
              <input type="text" placeholder="name" name="name"/>
            </div>
            <div className="inputBox">
              <span>
                <MdEmail />
              </span>
              <input type="email" placeholder="Email" name="email"/>
            </div>
            <div className="inputBox">
              <span>
                <BsFillTelephoneFill />
              </span>
              <input type="number" placeholder="Cell Number" name="number"/>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
