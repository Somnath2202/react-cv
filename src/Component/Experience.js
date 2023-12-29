import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
  
        <div className="row">
         
      <ul className='experience'>
          <li className="company-list">
            <div className='h-mng'>
              <a href='https://www.bluwebmedia.co.in/' target='_blank'>
                <img src="../../bwm.png" alt="" />
              </a>
            </div>
            <div className='exp-wrapper'>
              <div className='yrs'>2019</div>
              <h4><span>Company:</span>   BluWebMedia IT Services Pvt. Ltd.</h4>            
              <p><span>Designation:</span> Team Leader.</p>
              <p><span>Period: </span> From 2nd January, 2019 to till date.</p>
              <p><span>Responsibilities:</span>   
              Logical and physical design towards application with a web interface. Execute projects from first to last. Quality assurance of a project as a Senior. Involved in coding in HTML5, CSS3 and JQUERY etc.</p>
            </div>

          </li> 



            <li className="company-list">  
              <div className='h-mng'>
                <a className='bg-2' href='https://www.webguru-india.com/' target='_blank'>
                  <img src="../../webguru-infosystems-logo.png" alt="" />
                </a>
              </div>
              <div className='exp-wrapper'>
                <div className='yrs'>2010</div> 
                <h4><span>Company:</span>   Webguru Infosystems Pvt. Ltd.</h4>
                
                <p><span>Designation:</span> Team Leader.</p>
                <p><span>Period: </span> From 1st January, 2010 to 31st December, 2018.</p>
                <p><span>Responsibilities:</span>   
                Logical and physical design towards application with a web interface. Execute  projects from first to last. Quality assurance of a project as a Senior. Involved in coding in HTML5, CSS3, JQUERY and WORDPRESS etc.</p>
                </div>
            </li> 


          </ul>
          

        </div>    



    
  )
}


