import React from 'react';
import { useFormik } from 'formik';
import { ContactSubmit } from '../schemas';
import "./Contactform.css"

const initialValues = {
  f_name:"",
  l_name: "",
  email: "",
  mob: ""
}


export default function Contactform() {


  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSubmit,
    onSubmit: values => {    
        
    }

  });
  
//console.log(errors);

  return (
    <>
        <div className="row">
          <div className="col-lg-12">   
            <h3>Contact Form</h3>
            
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col">
                    <input type="text" className="form-control" name='f_name' autoComplete='off' values="{values.f_name}" placeholder="First name"  onChange={handleChange} onBlur={handleBlur} />
                  </div>
                  <div className="col"> 
                    <input type="text" className="form-control" name='l_name' autoComplete='off'  values="{values.l_name}"  placeholder="Last name" onChange={handleChange} onBlur={handleBlur} />
                  </div>
                </div>

                <div className="row g-3 py-4">
                  <div className="col">
                    <input type="email" className="form-control" name="email" autoComplete='off' values="{values.email}" placeholder="Enter Your Email" aria-label="Enter Your Email" onChange={handleChange} onBlur={handleBlur} />
                    <p className='error small'>{errors.email}</p>
                  </div>
                  <div className="col">
                    <input type="number" className="form-control" name="mob" autoComplete='off' values="{values.mob}" placeholder="Enter Your Phone Number" aria-label="Enter Your Phone Number" onChange={handleChange} onBlur={handleBlur}  />
                    <p className='error small'>{errors.mob}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <submit type="button" className="btn btn-primary">Submit</submit>
                  </div>
                  
                </div>





              </form>
            
          </div>

        
        </div>
        </>
  )
}

