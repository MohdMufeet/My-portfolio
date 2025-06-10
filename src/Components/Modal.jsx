import React from 'react'
import Form from './Form'


const Modal = ({ onClose }) => {
  return (
   <>
   {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
{/* <div class="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> */}
<div data-aos="zoom-in" data-aos-duration="1000" className="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-dark bg-gradient">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Get In Touch</h1>
        <button type="button" className="btn-close bg-white" aria-label="Close" onClick={onClose}></button>
      </div>
      <div class="modal-body bg-warning bg-gradient">
        <Form></Form>
      </div>
      {/* <div class="modal-footer bg-dark bg-gradient">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> */}
    </div>
  </div>
</div>

   </>
  )
}

export default Modal