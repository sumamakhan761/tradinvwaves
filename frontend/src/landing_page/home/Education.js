import React from 'react';

function Education() {
  return (
    <div className='container mt-5'>
     <div className='row justify-content-center'>

        <div className='col-lg-6 col-md-6'>
          <img src='media/images/index-education.svg'  data-aos="zoom-in" style={{ width: "70%" }} />
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 ' style={{ width: "40%" }}>
          <h1 className='mb-4 fs-4' data-aos="fade-up">Free and open market education</h1>
          <p className='text-mouted'data-aos="fade-up" >Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='' className='mx-5 'data-aos="fade-up" style={{ textDecoration: "none" }}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>

          <p className='text-mouted  mt-4'   data-aos="fade-up">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' className='mx-5' data-aos="fade-up" style={{ textDecoration: "none" }}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Education;