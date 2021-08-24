import React from 'react'
import '../Header/Header.css'



function Header() {
    return(
        <div>
            <div className="header-element">
                <div className="motto-element">
                    <span>EXOFTRAVEL</span>
                </div>
                <div className="dropdown-element"><a>Home</a></div>
                <div className="dropdown-element"><a>Gallery</a></div>
                <div className="dropdown-element"><a>Contacts</a></div>
                <div className="dropdown-element"><a>About Me</a></div>
            </div>
        </div>
    )
}
export default Header