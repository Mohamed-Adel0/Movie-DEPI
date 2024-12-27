import React from 'react';
import Css from "./Footer.module.css"
import Logo from "../Pictures/logo.png"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className={Css.parent}>
                <div className={Css.container}>
                    <div className={Css.card}  > <img src={Logo} alt="" /> </div>
                    <div className={Css.card}>
                    <ul>
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/Ourblog">Our Blog</Link></li>
                        <li><Link to="/contact">Contacts</Link></li>
                    </ul>
                    </div>
                    <div className={Css.card} >
                    <h5>Copyright ©2024 All rights reserved | This template is made by <Link to="https://www.linkedin.com/in/mohamed-adel-226611286/"><span>Mohamed-Adel</span></Link></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
