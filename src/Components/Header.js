import React from 'react';
import Typed from "react-typed";

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                {/* <h1>Web Development</h1> */}
                <Typed
                className="typed-text"
                strings={["Web Design","Web Development", "Facebook Ads", "Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">CONTACT ME</a>

            </div>
        </div>
    )
}

export default Header;
