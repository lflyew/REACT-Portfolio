import React from "react";
import cv from '../images/icons8-cv-96.png'

function Resume() {
    return (
    <div className='section resume-section' id='resume'>
    <br /><br />
    <h1>Resume</h1>
    <span>Download My Resume Here!</span>
    <br />
    <br />
    <div className='resume-container'>

      <img src={cv} width="40%" />
      <br />
      <a href="https://docs.google.com/document/d/1r-mFwxr5p4pCpJ_VhKFHntcnWXcYxeJt/edit?usp=share_link&ouid=113930350856157266323&rtpof=true&sd=true">
       <button className='button'>
       Click To Download
     </button>
     </a>
      </div>
    </div>
  )
}

export default Resume