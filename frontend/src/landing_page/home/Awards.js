import React from 'react';

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className=' col-md-5  p-5 '>
          <img src='media/images/largestBroker.svg'   data-aos="zoom-in" data-aos-duration="1000" />
        </div>
        <div className='col-md-7 col-sm-12 p-5' data-aos="fade-left" data-aos-duration = "1000">
          <h2>Largest stock broker in India</h2>
          <p className='mb-5'>1.5+ Crore TradingWaves clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 '>
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>

            </div>
            <div className='col-lg-6 col-md-6'>
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' alt='' style={{ width: "90%" }} />'
        </div>
      </div>
    </div>
  );
}

export default Awards;