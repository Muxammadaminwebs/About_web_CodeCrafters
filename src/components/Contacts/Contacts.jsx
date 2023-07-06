import React, { useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaBehanceSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import arrowWhite from "../../assets/image/otherImages/arrow-white.svg";
import arrowBlack from "../../assets/image/otherImages/arrow-black.svg";
import "./Contacts.scss";

const Contacts = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://codecrafters-lqkq.onrender.com/api/contacts", contact)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <>
      <Layout>
        <section className="contact container-fluid">
          <div className="contact__wrap">
            <h2 className="contact__title">Contacts</h2>
            <div className="contact__box">
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__title2">Contact us</h3>
                <p className="contact__text">
                  Let's get to the next level together
                </p>
                <div className="form-outline form-white">
                  <input
                    className="contact__input form-control"
                    type="text"
                    name="username"
                    id="username"
                    value={contact.username}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    required
                  />
                  <label
                    className="contact__label form-label"
                    htmlFor="username">
                    Full name
                  </label>
                </div>
                <div className="form-outline form-white">
                  <input
                    className="contact__input form-control"
                    type="email"
                    name="email"
                    id="email"
                    value={contact.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                  <label className="contact__label form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="form-outline form-white">
                  <input
                    className="contact__input form-control"
                    type="number"
                    name="phone"
                    id="phone"
                    value={contact.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                  <label className="contact__label form-label" htmlFor="phone">
                    Phone number
                  </label>
                </div>
                <div className="form-outline form-white">
                  <textarea
                    className="contact__textarea form-control"
                    name="description"
                    id="description"
                    value={contact.description}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Your message"
                    required></textarea>
                  <label
                    className="contact__label form-label"
                    htmlFor="description">
                    How can we help?
                  </label>
                </div>
                <button
                  className="contact__form-btn btn btn-danger"
                  type="submit">
                  Send
                </button>
              </form>
              <div className="contact__box2">
                <div className="contact__links">
                  <div className="contact__link">
                    <FaPhone className="contact__icon" />
                    <Link
                      className="contact__link-link"
                      to="tel: +1 (647)-563-9114">
                      +1 (647)-563-9114
                    </Link>
                  </div>
                  <div className="contact__link">
                    <IoIosMail className="contact__icon-min" />
                    <Link
                      className="contact__link-link"
                      to="mailto: lead@gmail.com">
                      lead@gmail.com
                    </Link>
                  </div>
                  <div className="contact__link">
                    <HiLocationMarker className="contact__icon-min" />
                    <Link className="contact__link-link">
                      Margaretenstraße 70/3, 1050 Vienna, Austria
                    </Link>
                  </div>
                </div>
                <div className="contact__btns">
                  <button className="contact__btn">
                    <p className="contact__btn-text">Become a client</p>
                    <span className="contact__btn-text">business@LEAD.com</span>
                    <img
                      className="contact__arrow"
                      src={arrowWhite}
                      alt="arrow-white"
                    />
                  </button>
                  <div className="contact__follow-sm">
                    <h4 className="contact__follow">Follow us</h4>
                    <div className="contact__sm">
                      <Link to="https://www.behance.net">
                        <FaBehanceSquare />
                      </Link>
                      <Link to="https://www.facebook.com">
                        <FaFacebookSquare />
                      </Link>
                      <Link to="https://www.instagram.com">
                        <FaInstagramSquare />
                      </Link>
                    </div>
                  </div>
                  <button className="contact__btn">
                    <p className="contact__btn-text">Become a partner</p>
                    <span className="contact__btn-text">business@LEAD.com</span>
                    <img
                      className="contact__arrow"
                      src={arrowBlack}
                      alt="arrow-black"
                    />
                  </button>
                  <button className="contact__btn">
                    <p className="contact__btn-text">Join LEAD team</p>
                    <span className="contact__btn-text">business@LEAD.com</span>
                    <img
                      className="contact__arrow"
                      src={arrowWhite}
                      alt="arrow-white"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contacts;
