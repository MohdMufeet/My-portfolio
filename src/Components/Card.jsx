import React from 'react'


const Card = () => {
  return (
    <>
    
      <div data-aos="flip-right" data-aos-duration="1000"className="card bg-dark text-white border-2 p-3 border-warning m-3" style={{width: "18rem"}}>
  <img src="https://reactjsexample.com/content/images/2022/07/Code-2022-01-57-01.jpg" className="card-img-top border border-3 rounded border-warning" alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">React E-Commerce</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Demo</a>
    <a href="#" className="btn btn-warning ms-2">Github</a>
  </div>
</div>
</>
  )
}

export default Card