import React from 'react'
import logo from '../images/logo.jpeg'

function Portfolio() {
    return (
        <div className='section porto-section' id='portfolio'>

      <br /><br />
      <h1>Portofolio</h1>
      <span> Projects </span>
      <br />
      <br />
      <div className="porto-item">
          <img src={logo} width="100%" />
          <h3>Flock Together</h3>
          <p> Shared Calendar App designed to plan outings/events with friends, family etc.  It also has the capability to chat offline with users charing their Calendars. </p>
          <a href="https://github.com/NickMagarian/flock_together">
            <button className='button'>See More</button>
          </a>
</div>
      <div className='porto-container'>
        <div className="porto-item">
        <img src= "" width="100%" />
        <h3>Polished</h3>
        <p> Polished is a Nail Salon Booking Application. It allows users to create an account and book a service at nail salon!</p>
        {/* <h3>Polished</h3> */}
        <a href="https://polished-booking-app.herokuapp.com/">
            <button className='button'>See More</button>
          </a>
          </div>
        <div className="porto-item">
        <img src="" width="100%" />
        <h3> What's For Dinner</h3>
        <p> An application designed to help busy individuals find quick and easy recipes and be able to shop for items!</p>
        <a href="https://verzo361219.github.io/Whats-For-Dinner/">
        <button className='button'>See More</button>
          </a>
          </div>
        <div className="porto-item">
            <img src ="" width="100%" />
            <h3>Coming Soon</h3>
            <p> Coming Soon</p>
            </div>
        <div className="porto-item">
            <img src ="" width="100%" />
            <h3>Coming Soon</h3>
            <p> Coming Soon</p>
            </div>
        <div className="porto-item">
            <img src ="" width="100%" />
            <h3>Coming Soon</h3>
            <p> Coming Soon</p>

            </div>
            </div>
            </div>
    )
}

export default Portfolio