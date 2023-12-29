import React from 'react';


export default function About() {
  return (
 
      <div className="container my-auto py-4">
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">   
            <h3>About Me</h3>
            <p>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.  Delivering work within time and budget which meets client’s requirements is our moto.</p>
            
          </div>

          <div className="col-lg-4 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">   
              <div className="img-box" data-img="./about-project.jpg"><img className="img-fluid d-block" src="./about-project.jpg" title="Somnath" alt="Somnath" /></div>         
          </div>
        
        </div>
      </div>



    
  )
}

