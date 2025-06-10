import React from 'react'

const Form = () => {
  return (
  <>
  <form className="row g-3 text-dark">
  <div className="col-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputMsg" className="form-label">Your Message</label>
    <textarea type="text" className="form-control" id="inputMsg"></textarea>
  </div>
  
 
  
  <div className="col-12">
    <button type="submit" className="btn btn-dark">Send</button>
  </div>
</form>
  </>
  )
}

export default Form