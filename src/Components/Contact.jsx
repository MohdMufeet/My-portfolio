import React from 'react'
import { FaInstagram,FaFacebook,FaGithub,FaYoutube,FaLinkedin  } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const Contact = () => {
  return (
    <div id="Contact" className='container my-5 '>
      <h1 className='text-center'>Contact</h1>
      <div data-aos="zoom-in-up" data-aos-duration="1000" className="px-5 my-5 icons row gap-3 justify-content-center align-items-center">
        <a href="#" className="items col-2 p-2 rounded-circle border border-2 border-warning d-flex justify-content-center align-items-center"><FaFacebook className='fs-1'/></a>
        <a href="#" className="items col-2 p-2 rounded-circle border border-2 border-warning d-flex justify-content-center align-items-center"><FaLinkedin className='fs-1'/></a>
        <a href="#" className="items-a col-2 p-2 rounded-circle border border-2 border-warning d-flex justify-content-center align-items-center"><FaInstagram  className='fs-1'/></a>
        <a href="#" className="items-a col-2 p-2 rounded-circle border border-2 border-warning d-flex justify-content-center align-items-center"><FaGithub className='fs-1'/></a>
        <a href="#" className="items-b col-2 p-2 rounded-circle border border-2 border-warning d-flex justify-content-center align-items-center"><FaYoutube className='fs-1'/></a>
        
        <a href="#" className="items-b col-2 p-2 rounded-circle border border-2 border-warning d-flex justify-content-center align-items-center"><CgMail className='fs-1'/></a>
      </div>


    </div>
  )
}

export default Contact