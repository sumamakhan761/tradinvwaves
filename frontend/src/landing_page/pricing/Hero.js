import React from 'react';
function Hero() {
  return (
    <div className='container '>
      <div className='row mt-5 text-center p-5 border-bottom animate__animated animate__pulse'>
        <h1 className='fs-1'>Pricing</h1>
        <h3 className='text-muted mt-3 fs-5 text-center'>Free equity investments and flat ₹20 intraday and F&O trades</h3>
      </div>

      <div className=' row mt-5 text-center'>
        <div className='col-lg col-md col-sm-12  p-5 '>
          <img src='media/images/pricing-eq.svg' alt='' />
          <h1 className='fs-3'>Free equity delivery</h1>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-lg col-md p-5 '>
          <img src='media/images/other-trades.svg' alt=''/>
          <h1 className='fs-3'>Intraday and F&O trades</h1>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-lg col-md p-5 '>
          <img src='media/images/pricing-eq.svg' alt=''/>
          <h1 className='fs-3'> Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Hero;