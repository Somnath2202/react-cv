//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './Component/Navbar';
import Header from './Component/Header';
import About from './Component/About';
import Education from './Component/Education';
import Experience from './Component/Experience';
import Projects from './Component/Projects';
import Address from './Component/Address';
import Contactform from './Component/Contactform';


function App() {
  return ( 
    <div className="App">

      <div className='container-fluid'>
        <div className="row">
          <div className='col-12'>
            <div className='container'>
              <div className="row">
                <div className='col-12'>
                   <Navbar> </Navbar> 
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>
      
      <div className='container-fluid'>
        <div className="row">
          <div className='col-12'>
            <div className='container'>
              <div className="row">
                <div className='col-12'>
                   <Header> </Header> 
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className="row">
          <div className='col-12 pb-5'>
            <div className='container'>
              <div className="row">
                <div className='col-12 py-5'>
                   <About></About>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>


      <div className='container-fluid bg-1 py-5 resume-summary'>
        <div className="row">
          <div className='col-12'>
            <div className='container'>
              <div className="row">
                <div className='col-12 text-center'>
                <h3 className="mb-3 f-size-1 mb-5">Company Experience</h3>
                </div>              
                <div className='col-12'>
                   <Experience></Experience>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>
      
      
      <div className='container-fluid py-5'>
        <div className="row">
          <div className='col-12'>
            <div className='container'>
              <div className="row">
                <div className='col-12 text-center'>
                  <p className='f-size-1 mb-5 f-color-2'>My Projects</p>
                </div>              
                <div className='col-12'>
                   <Projects></Projects>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>


      <div className='container-fluid py-5 bg-1'>
        <div className="row">
          <div className='col-12'>
            <div className='container'>
              <div className="row">
                <div className='col-12 text-center'>
                  <p className='f-size-1 mb-5 f-color-2'>My Education</p>
                </div>              
                <div className='col-12'>
                   <Education></Education>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>
      
      
      <div className='container-fluid py-5'>
        <div className="row">
          <div className='col-12'>
            <div className='container'>
              <div className="row">
                <div className='col-12 text-center'>
                  <p className='f-size-1 mb-5 f-color-2'>Contact Us</p>
                </div>              
                <div className='col-6'>
                   <Address></Address>
                </div> 

                <div className='col-6'>
                   <Contactform></Contactform>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;