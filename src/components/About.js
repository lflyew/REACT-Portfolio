import React from "react";
import pic from "../images/Image-2.JPG"

function About() {
    return (
        <div className='section' id='about'>
          <h1 >About Me</h1>
          {/* <span>Get To Know</span> */}
          <br /><br />
          <div className='about'>
            <div className='about-item'>
              <img width='100%' src= { pic }  alt="photo" />
            </div>
            <div className='about-item-2'>
                <h2> Hello My Name Is Latoya Lyew,</h2>
                <p> I am a Master's Degree Registered Nurse turned Techie. I have been a Emergency Room Nurse for 15 years. 
                I Love to travel and spend time with my daughter! I'm excited to learn and grow in the field of coding! &#128512;</p>

                <b>Phone Number: (770)906-3181</b><br />
                <b>Email: lflyew@gmail.com</b>

                </div>
      </div>
    </div>

  )
}

export default About