import React from "react";

import { useRef,useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null)
  useEffect( () => {
    const options = {
      strings:["Welcome To My Website","I Am Mohd Mufeet" ],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current , options)

    return () => {
      typed.destroy()
    }
  },[])
  return (
    <div className="container my-5">
      <div className="row flex-md-row flex-column-reverse align-items-center">
        <div className="col-md-7 col-12 d-flex justify-content-center align-items-center">
          <div className="col-9 cont text-center border border-2 border-warning rounded-3 p-3" data-aos="fade-up-left" data-aos-duration="1000">
            <h1 ref={typedRef}>

            </h1>

            <a href="#" className="btn btn-outline-warning">
              Download
            </a>
          </div>
        </div>
        <div className="col right d-flex justify-content-center align-items-center">
          <div data-aos="fade-up-right" data-aos-duration="1000" className="img d-flex justify-content-center align-items-center">
            <img className="imglk mb-5" alt="abc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
