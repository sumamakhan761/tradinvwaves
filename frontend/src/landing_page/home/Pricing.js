import React from 'react';

function Pricing() {
  return (
    <div className='container' style={{ paddingLeft:"10%" }}>
      <div className='row '>
        <div className='col-6' style={{ width: "35%" }}>
          <h1 className='fs-2'  data-aos = "fade-right" data-aos-duration = "1000">Unbeatable pricing</h1>
          <p className='text-mouted'  data-aos = "fade-right"  data-aos-duration = "1200">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' className='mx-5' style={{ textDecoration: "none" }}  data-aos = "fade-right" data-aos-duration = "1300"  >See Pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className='col-6' data-aos= "fade-left" data-aos-duration = "1000">
          <div className='row mb-5'>
            <div className='col p-1 border text-center'>
              <h1 className='mb-3'>₹0</h1>
              <p className='text-mouted'>Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className='col m-1 text-center p-3 border'>
              <h1 className='mb-3'>₹20</h1>
              <p className='text-mouted'>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;