import React from "react";
import { useState } from "react";
import styles from "../css/Navbar.module.css";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    
     <div className="container " data-aos="fade-down" data-aos-duration="1000">
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="navbar-brand text-white"><h1>Portfolio</h1></div>
          <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#menu1"><i class="fa-solid fa-bars" />
      </button>

      <div className="collapse navbar-collapse text-center" id="menu1">
        <ul className="navbar-nav ms-auto gap-4 text-md-center">

          
          <li className="nav-item"><a href="#" className={`nav-link text-white ${styles.abc}`}>Home</a></li>
          <li className="nav-item"><a href="#Experiance" className={`nav-link text-white ${styles.abc}`}>Experience</a></li>
          <li classNaame="nav-item"><a href="#Skills" className={`nav-link text-white ${styles.abc}`}>Skills</a></li>
          <li className="nav-item"><a href="#Projects" className={`nav-link text-white ${styles.abc}`}>Projects</a></li>
          <li className="nav-item"><a href="#Contact" className={`nav-link text-white ${styles.abc}`}>Contact</a></li>
          <button className="btn btn-warning" type="button" onClick={() => setShowModal(true)}>Get In Touch</button>
        </ul></div>
        </nav></div>
         {/* <div class="container">
        
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
          <li className="nav-item"><a href="#" className="nav-link text-white">Experience</a></li>
          <li classNaame="nav-item"><a href="#" className="nav-link text-white">Skills</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Projects</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Contact</a></li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  
  </nav>

        </div> */}
{showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;

