import React from 'react';

function Hero() {
  return (

    <div className='container p-5'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' data-aos="fade-up"
      data-aos-duration="1500" alt='Hero Image' className='mb-5' style={{ width: "100%" }} />
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
      </div>
    </div>
  );

}

export default Hero;