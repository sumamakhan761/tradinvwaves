import React from 'react';

function Hero() {
  return (
    <section className="container-fluid hero-section">
      <div className="pt-5 pb-3  text-center">
        <h4 className="hero-title">Support Portal</h4>
        <a href="#" className="track-link">Track Tickets</a>
      </div>

      <div className="row p-3 m-3 hero-content">
        
        <div className="col-lg-5 col-md-6 col-12 pb-5">
          <h1 className="fs-3 mb-3 hero-text">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input 
            className="form-control mb-3 search-input" 
            placeholder="Eg. how do I activate F&O" 
          />
          <div className="quick-links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>
        
        <div className="col-lg-5 col-md-6 col-12 p-3 featured-section">
          <h1 className="fs-3 featured-title">Featured</h1>
          <ol className="featured-list">
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
