import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  TryDemo,
  learnMore,
  googlePlay,
  appStore,

}) {
  return (
    <div className='container mt-5 p-5 mb-5'>
      <div className='row mb-5'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img src={imageURL} alt='' data-aos = "zoom-in" data-aos-animation="1000" />
        </div>
        <div className='col-lg-6 mt-5 ' style={{ width: "35%", marginLeft: "6em" }} data-aos = "fade-right" data-aos-duration = "1000">
          <h1 className='mb-4 fs-2'>{productName}</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.05em" }}>{productDiscription}</p>

         
          <div className='mt-3'>
            <a href={googlePlay}><img src='media/images/googleplay.svg' /></a>
            <a href={appStore} style={{ marginLeft: "3em" }}><img src='media/images/appstorebadge.svg' /></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;