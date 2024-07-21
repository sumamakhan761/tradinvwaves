import React from 'react';
function Universe() {
  return (
    <div className='container mt-5 text-center' >
      <div className='row'>
        <h1>The Tradingwaves Universe
        </h1>
        <p className='mb-5'> Extend your trading and investment experience even further with our partner platforms</p>

        <div className='col-lg-4 col-md-4 col-sm-12 p-3'>
          <img src="media/images/smallcase-logo.png" alt='' />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        <div className='col-lg-4 col-md-4  p-3'>
          <img style={{ height: "55px" }} src="media/images/streak-logo.png" alt='' />
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        <div className='col-lg-4 col-md-4  p-3'>
          <img className="mt-3" style={{ height: "35px" }} src="media/images/sensibull-logo.svg" alt='' />
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <div className='col-lg-4 col-md-4 p-3 mt-5'>
          <img style={{ height: "55px" }} src="media/images/zerodhafundhouse.png" alt='' />
          <p className='text-small text-muted'>Asset management</p>
        </div>
        <div className='col-lg-4 col-md-4  p-3 mt-5'>
          <img style={{ height: "55px" }} src="media/images/tijori.svg" alt='' />
          <p className='text-small text-muted'>Fundamental research platform
          </p>
        </div>
        <div className='col-lg-4 col-md-4  p-3 mt-5'>
          <img style={{ height: "55px" }} src="media/images/ditto-logo.png" alt='' />
          <p className='text-small text-muted'>Insurance</p>
        </div>
      </div>
    </div >
  );
}

export default Universe;