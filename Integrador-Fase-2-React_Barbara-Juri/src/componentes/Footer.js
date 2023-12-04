import React from 'react';
import '../componentes/Footer.css'
import { NavLink } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="Footer">
        <h4>&copy; Copyright 2023</h4>
        <div id="footer">
          <NavLink to="/contacto" className={'mr-2'}><HiEnvelope style={{color:'black'}}/></NavLink>
          <NavLink target='blank' to="https://www.instagram.com/" className={'mr-2'}><AiFillInstagram style={{color:'red'}}/></NavLink>
          <NavLink target='blank' to="https://www.facebook.com/" className={'mr-2'}><FaFacebook style={{color:'blue'}}/></NavLink>
          <NavLink target='blank' to="https://web.whatsapp.com/" className={'mr-2'}><FaWhatsapp style={{color:'green'}}/></NavLink>
        </div>
        </div>
  );
};

export default Footer;
