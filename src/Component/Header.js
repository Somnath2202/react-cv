import React from 'react';


export default function Header() {
  return (
 
      <div className="container my-auto py-4">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">   
              <h1 className="text-21 fw-600 text-uppercase mb-0 ms-n1">
                <span href="" className="typewrite" data-period="2000" data-type='[ "Hi, I am Sr. Web Developer", "My Name Is Somnath Mukherjee" ]'>
                  <span className="wrap"></span>
                </span>
              </h1>
          
            <h3 className="text-5">Experienced 13 years</h3>
            <a className="btn btn-dark mt-3 me-2">View My Works</a>
            <a className="btn btn-dark mt-3">Contact Me<span className="text-4 ms-2">
                <i className="far fa-arrow-alt-circle-down"></i></span></a>
          </div>
          <div className="col-lg-3 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
            <div className="bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
              <img className="img-fluid rounded-pill d-block" src="./somnath-mukherjee.jpg" title="Somnath" alt="Somnath" />
            </div>
          </div>
        </div>
      </div>



    
  )
}


 var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
