import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className='text-center' id="Skills">Skills</h1>
        <div className="row justify-content-center align-items-center flex-sm-column flex-md-row mt-4">
        
          <div data-aos="flip-left" data-aos-duration="1000" className="s-box col-lg-3 col-sm-6 col-8 d-flex flex-column justify-content-center align-items-center border-1 border border-warning rounded-3 py-3 m-3 bg-blue px-0">
            <img className='mt-3 rounded-circle' src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png" width='100' alt="" />
            
            <p class="fs-2 mt-3">HTML</p>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000"className="s-box col-lg-3 col-sm-6 col-8 d-flex flex-column justify-content-center align-items-center border-1 border border-warning rounded-3 py-3 m-3 bg-blue px-0">
            <img className='mt-3 rounded-circle' src="https://img.icons8.com/fluent/512/css3.png" width='100' alt="" />
            <p class="fs-2 mt-3">CSS</p>
          </div>
         

          
        </div>

        

        <div className="row justify-content-center align-items-center flex-sm-column flex-md-row">
        
          <div data-aos="flip-left" data-aos-duration="1000" className="s-box col-lg-3 col-sm-6 col-8 d-flex flex-column justify-content-center align-items-center border-1 border border-warning rounded-3 py-3 m-3 bg-blue px-0">
            <img className='mt-3 rounded-circle' src="https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" width='100' alt="" />
            
            <p class="fs-2 mt-3">JavaScript</p>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000" className="s-box col-lg-3 col-sm-6 col-8 d-flex flex-column justify-content-center align-items-center border-1 border border-warning rounded-3 py-3 m-3 bg-blue px-0">
            <img className='mt-3 rounded-circle' src="https://miro.medium.com/v2/resize:fit:384/1*F5EXvmYqWIYVlujefbaS-Q.png" width='100' alt="" />
            <p class="fs-2 mt-3">Boostrap</p>
          </div>
         

          
        </div>
       
        
<div className="row justify-content-center align-items-center flex-sm-column flex-md-row">
        
          <div data-aos="flip-left" data-aos-duration="1000"className="s-box col-lg-3 col-sm-6 col-8 d-flex flex-column justify-content-center align-items-center border-1 border border-warning rounded-3 py-3 m-3 bg-blue px-0">
            <img className='mt-3 rounded-circle' src="https://images.icon-icons.com/3781/PNG/512/react_icon_231932.png" width='100' alt="" />
            
            <p class="fs-2 mt-3">React</p>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000"className="s-box col-lg-3 col-sm-6 col-8 d-flex flex-column justify-content-center align-items-center border-1 border border-warning rounded-3 py-3 m-3 bg-blue px-0">
            <img className='mt-3 rounded-circle' src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" width='100' alt="" />
            <p class="fs-2 mt-3">Figma</p>
          </div>
         

          
        </div>

      </div>
    </>
  )
}

export default Skills