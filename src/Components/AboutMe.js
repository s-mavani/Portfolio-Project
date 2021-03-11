import React from 'react'
import MyImage from '../about-me.jpeg'

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={MyImage} alt="Profile-Pic"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">ABOUT ME</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero autem numquam quo iste eos at quas eum illo! Dicta repudiandae necessitatibus ea illum tenetur, eos corrupti consequuntur at dolore!
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
