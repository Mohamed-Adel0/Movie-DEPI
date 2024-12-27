import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,NavLink } from 'react-router-dom';
import logo from "../Pictures/logo.png"
import { BsSearch } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import { IoIosArrowUp } from 'react-icons/io';
const NavBar = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
      const [scroll, setScroll] = useState(false);
      const eventScroll = () => {
        if (window.scrollY > 1308) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
      window.addEventListener("scroll", eventScroll);
  return (
    <div className='parent'>
      <Navbar expand="lg" className="bg-body-tertiary" data-aos="fade-right">
      <Container>
        <Link to="/"><img src={logo} alt="" /></Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-5 ul">
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/Ourblog">Our Blog</NavLink>
            <NavLink to="/contact">Contacts</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="iconsx">
          <Link to=""><BsSearch /> </Link>
          <Link to="/Login"><FaUserLarge/></Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
    <div className={`top ${scroll ? "showScroll" : ""}`}>
      <button onClick={() => window.scrollTo(0, 0)}><IoIosArrowUp /></button>
    </div>
    </div>
  );
}

export default NavBar;
