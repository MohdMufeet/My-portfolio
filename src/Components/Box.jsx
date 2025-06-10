import React from 'react'

const Box = () => {
  return (
    <>
    <div data-aos="zoom-in" data-aos-duration="1000" className="container col-10 col-lg-6 border-1 border border-2 border-warning rounded-3 py-3 my-5 text-center bg-blue">
      <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
        <div className="col-2 d-flex justify-content-center align-items-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroV7JQvlAS1wSXW3bIKdPG_lZBHkl3fZC9w&s" width='50' alt="" /></div>

        <div className="col-md-10 col-12">
         <div className="row">
           <div className="col-12">
              <p className="fs-md-1 fs-4 m-0 p-0">Lorem ipsum dolor sit amet.</p>
              <p className="fs-md-2 fs-5 m-0 p-0"><span className="text-success">sept , 2023 Present ,</span> CA ,  India</p>
              <p className="fs-6 m-0 p-0 text-warning">Lorem ipsum dolor sit.</p>
              <p className="fs-6 m-0 p-0 text-warning">Lorem ipsum dolor sit. Lorem, ipsum.</p>
           </div>
        </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Box