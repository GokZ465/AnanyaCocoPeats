import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import whatsappLogo from "../../images/whatsapp-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnimation,
} from "../../components/Animation/Animation";
import { Hide } from "../Service/styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ContactStyle = styled(motion.section)`
  padding: 5rem;
  max-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #1b1b1b;
  background-color: #f0f7f7;
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 5rem 2rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 1.5rem;
    flex-direction: column;
    max-height: fit-content;
    height: 100%;
  }
`;
const FormTitle = styled(motion.div)`
  width: 40%;
  h4 {
    color: #1b1b1b;
    font-size: 4rem;
  }
  p {
    color: #353535;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    h4 {
      font-size: 3.6rem;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    width: 100%;

    h4 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 30rem;
  width: 100%;
  padding: 3rem;
  border-radius: 7px;
  background-color: #1b1b1b;
  label {
    color: #179b6b;
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    letter-spacing: 1.4px;
  }
  button {
    background: #179b6b;
    color: #1b1b1b;
    padding: 0.8rem 1rem;
    border-radius: 5.55px;
    margin-top: 2rem;
    &:active,
    &:hover {
      outline: 4px solid #f7f7f7;
    }
  }
  input,
  textarea {
    font-family: inherit;
    padding: 10px;
    border-radius: 5.55px;
    background-color: #f7f7f7;
    outline: none;
    border: none;
    font-size: 16px;
    flex-grow: 2;
    border: 1px solid #fff;
    &:focus {
      outline: 3px solid #179b6b;
    }
    &::placeholder {
      color: #828282;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      margin: 0 0 16px 0;
    }
  }
  textarea {
    resize: vertical;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    margin-left: 1rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 1.5rem;
  }
`;

const PhoneUsContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const ContactForm = () => {
  const form = useRef(null);
  const history = useHistory();
  const sendEmail = (e) => {
    e.preventDefault();
    const formElement = e.target; // Get the form element from the event

    emailjs
      .sendForm(
        "service_e01w5yc",
        "template_ljpn1xs",
        formElement, // Pass the form element here
        "os0DqSxeYI3huB3Y3"
      )
      .then((result) => {
        console.log(result.text);
        history.push("/"); // Push the user back to the home ("/") route
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      onSubmit={(e) => sendEmail(e)}
    >
      <FormTitle variants={titleAnimation}>
        <Hide>
          <motion.h4 styles={{ backgroundColor: "#179b6b" }}>
            Ananya Cocopeat Exports
          </motion.h4>
          <motion.p>
            Thank you for considering Ananya Cocopeat Exports for your cocopeat
            and coir needs. We are confident that our products and services will
            meet and exceed your expectations. Please feel free to contact us
            with any questions or inquiries.
          </motion.p>
          <a
            href="https://api.whatsapp.com/send?phone=917550055871&text=Hello%20there!"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              href="https://api.whatsapp.com/send?phone=917550055871&text=Hello%20there!"
              target="_blank"
              src={whatsappLogo}
              alt="WhatsApp Logo"
              style={{
                width: "54px",
                marginRight: "38px",
                backgroundColor: "#179b6b",
                borderRadius: "20%",
                margin: "0px",
                marginTop: "1rem",
              }}
            />
            <h3
              style={{
                caretColorolor: "#179b6b",
                padding: "10px",
                borderRadius: "20%",
                fontSize: "1.5rem",
              }}
            >
              WhatsApp
            </h3>
          </a>

          <PhoneUsContainer href="tel:+917550055871">
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "20%",
                margin: "0px",
                marginTop: "1rem",
              }}
            />
            <h3
              style={{
                padding: "10px",
                borderRadius: "20%",
                fontSize: "1.5rem",
              }}
            >
              Phone Us
            </h3>
          </PhoneUsContainer>
        </Hide>
      </FormTitle>
      <FormContainer onSubmit={(e) => sendEmail(e)}>
        <label>
          Your name <span>&#42;</span>
        </label>
        <input
          name="Full_Name"
          type="text"
          placeholder="John Doe"
          required
          aria-required
        />

        <label>
          Your email <span>&#42;</span>
        </label>
        <input
          name="Your_Email"
          type="email"
          placeholder="johndoe@xyz.com"
          required
          aria-required
        />

        <label> Contact Number</label>
        <input
          name="Contact_Number"
          type="number"
          maxLength={10}
          placeholder="9597225658"
        />

        <label> Your Message</label>
        <textarea
          name="message"
          rows="4"
          cols="50"
          wrap="hard"
          placeholder="Type your message"
        ></textarea>

        <button>Send Message</button>
      </FormContainer>
    </ContactStyle>
  );
};

export default ContactForm;
