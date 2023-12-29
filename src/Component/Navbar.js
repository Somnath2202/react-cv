import React from 'react';


export default function Navbar() {
  return (

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <a href="#">Projects</a>
        </li>        
        <li className="nav-item">
          <a href="#">Education</a>
        </li>        
        <li className="nav-item">
          <a href="#">Address</a>
        </li>        
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>        
      </ul>
    </div>
  </div>
</nav>


    
  )
}

//  export default App;